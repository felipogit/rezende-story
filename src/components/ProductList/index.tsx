"use client";

import { useState } from "react";
import { Product } from "../Products";


interface ProductListProps {
  addItemToCart: (product: Product) => void;
  products: Product[]; // Recebe a lista de produtos
}

export function ProductList({ addItemToCart, products }: ProductListProps) {
  // Certificando-se de que a chave de descriptionVisibility seja do tipo string
  const [descriptionVisibility, setDescriptionVisibility] = useState<Record<string, boolean>>({});

  const toggleDescription = (productId: number) => {
    // Convertendo o id do produto para string ao usá-lo como chave
    const productIdStr = String(productId);

    // Inverte o estado de mostrar/ocultar descrição para o produto específico
    setDescriptionVisibility((prevState) => ({
      ...prevState,
      [productIdStr]: !prevState[productIdStr], // Usando a chave como string
    }));
  };

  return (
    <div className="container mx-auto px-4 py-4">  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => {
          const showFullDescription = descriptionVisibility[String(product.id)] || false;
          const shortDescription = product.description.slice(0, 100); // Exibe os primeiros 100 caracteres
          const fullDescription = product.description;

          return (
            <div key={product.id} className="border p-4 rounded-lg">
              
              <img
                
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">R$ {product.price.toFixed(2)}</p>
              <p className="text-gray-600 mt-2">
                {showFullDescription ? fullDescription : shortDescription}{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => toggleDescription(product.id)} // Usando product.id
                >
                  {showFullDescription ? "Mostrar menos" : "Mostrar mais"}
                </span>
              </p>
              <button
                onClick={() => addItemToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
