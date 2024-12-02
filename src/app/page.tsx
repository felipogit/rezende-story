"use client";

import { useState, useEffect } from "react";
import { categories, Product } from "@/components/Products";
import { ProductList } from "@/components/ProductList";
import Header from "@/components/Header";
import { Banner } from "@/components/Banner";

export default function Home() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Filtra os produtos de acordo com a categoria selecionada
    if (selectedCategory === null) {
      // Se nenhuma categoria foi selecionada, mostramos todos os produtos
      setFilteredProducts(categories.flatMap((category) => category.products));
    } else {
      // Filtra os produtos pela categoria selecionada
      const category = categories.find((cat) => cat.id === selectedCategory);
      if (category) {
        setFilteredProducts(category.products);
      } else {
        setFilteredProducts([]); // Se a categoria não for encontrada
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

  // Função para obter o nome da categoria selecionada
  const getCategoryName = (categoryId: number | null): string => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Todas as Categorias"; // Nome da categoria ou "Todas as Categorias" caso não tenha uma categoria selecionada
  };

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
        setSelectedCategory={setSelectedCategory}
      />
      <Banner />
      
      {/* Exibindo o nome da categoria selecionada */}
      <h3 className="text-2xl text-black font-bold mb-4 m-5">
         {getCategoryName(selectedCategory)} {/* Exibe o nome da categoria */}
      </h3>

      {/* Passando os produtos filtrados para o ProductList */}
      <ProductList addItemToCart={addItemToCart} products={filteredProducts} />
    </div>
  );
}
