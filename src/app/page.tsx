"use client";

import { useState, useEffect } from "react";
import { Product } from "@/components/Products";
import { ProductList } from "@/components/ProductList";
import Header from "@/components/Header";
import { Banner } from "@/components/Banner";
import { categories } from "@/components/Products";

export default function Home() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Estado para categoria selecionada
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Produtos filtrados

  useEffect(() => {
    if (selectedCategory === "") {
      // Se não houver categoria selecionada, exibe todos os produtos
      setFilteredProducts(categories.flatMap((category) => category.products));
    } else {
      // Filtra produtos pela categoria selecionada
      const category = categories.find((cat) => cat.name === selectedCategory);
      if (category) {
        setFilteredProducts(category.products);
      }
    }
  }, [selectedCategory]);

  const toggleCart = () => setCartOpen(!cartOpen);

  const addItemToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header
        cartItems={cartItems}
        toggleCart={toggleCart}
        removeItem={removeItem}
        changeQuantity={changeQuantity}
        total={total}
        cartOpen={cartOpen}
        categories={categories}
        setSelectedCategory={setSelectedCategory} // Passa a função para o Header
      />
      <Banner />
      <ProductList addItemToCart={addItemToCart} products={filteredProducts} /> {/* Passa os produtos filtrados */}
    </div>
  );
}
