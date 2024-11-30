"use client";

import { useState } from "react";
import { categories } from "../Products";
import Image from 'next/image';

export const ProductList = () => {
  // Criando um estado que armazena a visibilidade das descrições de cada produto
  const [descriptionVisibility, setDescriptionVisibility] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (productId: string) => {
    // Inverte o estado de mostrar/ocultar descrição para o produto específico
    setDescriptionVisibility((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} style={{ marginBottom: "20px" }}>
          <h2 className="text-xl font-bold p-2 ">{category.name}</h2>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              padding: "10px 0",
            }}
          >
            {category.products.map((product) => {
              // Definindo a visibilidade da descrição com base no ID do produto
              const showFullDescription = descriptionVisibility[product.id] || false;

              // Exibe apenas um pedaço da descrição
              const shortDescription = product.description.slice(0, 100); // Exibe os primeiros 100 caracteres
              const fullDescription = product.description;

              return (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ccc",
                    margin: "10px",
                    padding: "10px",
                    maxWidth: "200px",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100%", height: "auto" }}
                    width={200} // Adicionei as propriedades width e height
                    height={200}
                  />
                  <h3 className="text-base font-bold">{product.name}</h3>
                  <p className="text-center">
                    {showFullDescription ? fullDescription : shortDescription}{" "}
                    <span
                      className="text-blue-50"
                      onClick={() => toggleDescription(product.name)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      {showFullDescription ? "Mostrar menos" : "Mostrar mais"}
                    </span>
                  </p>
                  <p>
                    <strong>Preço:</strong> R$ {product.price.toFixed(2)}
                  </p>
                  <button>Adicionar ao carrinho</button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
