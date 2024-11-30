// components/Cart.tsx
import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartProps {
  items: CartItem[];
  total: number;
  closeCart: () => void;
  removeItem: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
}

export const Cart: React.FC<CartProps> = ({ items, total, closeCart, removeItem, changeQuantity }) => {
  return (
    <div className="absolute top-14 right-0 w-80 bg-white shadow-md p-4 border rounded-lg">
      <h3 className="text-xl font-bold mb-4">Carrinho de Compras</h3>
      
      {/* Lista de itens */}
      <ul className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="flex items-center space-x-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-grow">
                <p>{item.name}</p>
                <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
              </div>
              
              {/* Quantidade */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="text-sm bg-gray-200 p-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => changeQuantity(item.id, item.quantity + 1)}
                  className="text-sm bg-gray-200 p-1 rounded"
                >
                  +
                </button>
              </div>

              {/* Botão de remover */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 ml-2"
                aria-label="Remover item"
              >
                X
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500">Carrinho vazio</li>
        )}
      </ul>

      {/* Total */}
      <div className="flex justify-between mt-4">
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>

      {/* Botão para finalizar compra */}
      <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded" onClick={closeCart}>
        Finalizar Compra
      </button>

      {/* Botão para fechar o carrinho */}
      <button
        className="absolute top-2 right-2 text-gray-600"
        onClick={closeCart}
        aria-label="Fechar carrinho"
      >
        X
      </button>
    </div>
  );
};


