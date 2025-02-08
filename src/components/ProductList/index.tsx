"use client";

import { useState } from "react";
import { Product } from "@/components/Products";
import ProductModal from "@/components/ProductModal";
import AddToCartModal from "../ProductModal/AddToCartModal";


interface ProductListProps {
  addItemToCart: (product: Product) => void;
  products: Product[];
}

export function ProductList({ addItemToCart, products }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] = useState(false); // Estado para controlar o modal de confirmação
  const [addedProductName, setAddedProductName] = useState<string>(""); // Nome do produto adicionado

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleAddToCart = (product: Product) => {
    addItemToCart(product); // Adiciona o produto ao carrinho
    setAddedProductName(product.name); // Atualiza o nome do produto adicionado
    setIsModalOpen(false); // Fecha o modal de produto
    setIsAddToCartModalOpen(true); // Abre o modal de confirmação

    // Fecha o modal de confirmação após 2 segundos
    setTimeout(() => {
      setIsAddToCartModalOpen(false); // Fecha o modal de confirmação
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition bg-white flex flex-col"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded-lg cursor-pointer"
              onClick={() => openModal(product)} // Abre o modal do produto
            />
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-500 font-medium">R$ {product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-sm mt-1 flex-grow">
              {product.description.slice(0, 60)}...
              <span className="text-blue-500 cursor-pointer" onClick={() => openModal(product)}> Ver mais</span>
            </p>

            {/* Container do botão para alinhar sempre no final */}
            <div className="mt-auto">
              <button
                onClick={() => handleAddToCart(product)} // Chama a função para adicionar ao carrinho
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition text-sm sm:text-base"
              >
                🛒 Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal do Produto */}
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} addItemToCart={handleAddToCart} />

      {/* Modal de confirmação de produto adicionado */}
      <AddToCartModal
        isOpen={isAddToCartModalOpen}
        onClose={() => setIsAddToCartModalOpen(false)} // Fecha o modal de confirmação
        productName={addedProductName} // Passa o nome do produto adicionado
      />
    </div>
  );
}
