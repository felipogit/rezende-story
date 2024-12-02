"use client";

import { useState, useEffect } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Cart } from "../Cart";
import { Category } from "../Products";
import Image from "next/image";

interface HeaderProps {
  cartItems: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }[];
  toggleCart: () => void;
  removeItem: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
  total: number;
  cartOpen: boolean;
  categories: Category[]; // Passar as categorias
  setSelectedCategory: (categoryId: number | null) => void; // Função para selecionar a categoria
}

export default function Header({
  cartItems,
  toggleCart,
  removeItem,
  changeQuantity,
  total,
  cartOpen,
  categories,
  setSelectedCategory,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0); // Contagem de itens no carrinho

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setItemCount(count);
  }, [cartItems]);

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategory(categoryId); // Seleciona a categoria pelo ID
    setMenuOpen(false); // Fecha o menu após a seleção
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-blue-500"
          aria-label="Abrir menu"
        >
          <FaBars size={24} />
        </button>

        <div className="text-xl font-bold text-gray-800 flex-1 text-center md:text-left">
          <Image
            src="/logo.jpg"
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto md:mx-0"
            width={50}
            height={50}
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleCart}
              aria-label="Carrinho"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaShoppingCart size={20} />
            </button>
            {itemCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute left-0 w-full bg-white shadow-md p-4 md:p-2 md:static md:flex md:space-x-4 md:justify-center`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 md:justify-center space-y-2 md:space-y-0">
          <li>
            <button
              onClick={() => handleCategorySelect(null)}
              className="text-gray-700 hover:text-blue-500 py-2 px-4 rounded-md"
            >
              Todos
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleCategorySelect(category.id)}
                className="text-gray-700 hover:text-blue-500 py-2 px-4 rounded-md"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {cartOpen && (
        <Cart
          items={cartItems}
          total={total}
          closeCart={toggleCart}
          removeItem={removeItem}
          changeQuantity={changeQuantity}
        />
      )}
    </header>
  );
}
