import { Product } from "@/components/Products";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function AddToCartModal({ isOpen, onClose, productName }: AddToCartModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
      onClick={onClose} // Fecha ao clicar fora
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        {/* Emoji de sucesso */}
        <div className="text-6xl mb-4 text-green-500">
          ✅
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {productName} foi adicionado ao carrinho!
        </h2>
        <p className="text-lg text-gray-600 text-center mb-4">
          Você pode continuar comprando ou ir para o carrinho.
        </p>
        <div className="flex justify-around w-full">
          {/* Botões de ação */}
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition text-sm sm:text-base"
          >
            Continuar comprando
          </button>
          <button
            onClick={onClose} // Você pode redirecionar para a página do carrinho aqui
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition text-sm sm:text-base"
          >
            Ir para o Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
