export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    products: Product[];
  }
  
  
  export const categories: Category[] = [
    {
      id: 1,
      name: "Cuidados Pessoais", // Categoria
      products: [
        {
          id: 1,
          name: "Creme Hidratante",
          price: 29.99,
          description: "Creme hidratante",
          imageUrl: "/images/creme-hidratante.jpg",
        },
        {
          id: 2,
          name: "Shampoo Revitalizante",
          price: 19.99,
          description: "Shampoo revitalizante",
          imageUrl: "/images/shampoo-revitalizante.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Cuidados Capilares", 
      products: [
        {
          id: 3,
          name: "Máscara Capilar",
          price: 39.99,
          description: "Máscara capilar",
          imageUrl: "/images/mascara-capilar.jpg",
        },
        {
          id: 4,
          name: "Shampoo Nutritivo",
          price: 25.99,
          description: "Shampoo nutritivo",
          imageUrl: "/images/shampoo-nutritivo.jpg",
        },
      ],
    },
  ];
  