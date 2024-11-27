"use client";

import { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Botão de Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-blue-500"
          aria-label="Abrir menu"
        >
          <FaBars size={24} />
        </button>

        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 flex-1 text-center md:text-left">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto md:mx-0"
          />
        </div>

        {/* Ícones e Pesquisa */}
        <div className="flex items-center space-x-4">
          {/* Pesquisa (Desktop ou Mobile Toggle) */}
          <div className="hidden md:block flex-1">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquise aqui..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Pesquisar"
            className="text-gray-600 hover:text-blue-500 md:hidden"
          >
            <FaSearch size={20} />
          </button>

          {/* Wishlist */}
          <button aria-label="Wishlist" className="text-gray-600 hover:text-red-500">
            <FaHeart size={20} />
          </button>
          {/* Carrinho */}
          <button aria-label="Carrinho" className="text-gray-600 hover:text-blue-500">
            <FaShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Input de Pesquisa no Mobile */}
      {searchOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 md:hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise aqui..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Menu (Mobile e Desktop) */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block bg-white shadow-md p-4 md:p-2`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 md:justify-center space-y-2 md:space-y-0">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Perfumes e Fragrâncias
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
            Cuidados faciais e corporais
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Acessórios
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Linha Capilar
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Clareadores
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Sabonetes
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
