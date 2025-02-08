import { Product } from "@/components/Products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  addItemToCart: (product: Product) => void;
}

export default function ProductModal({ product, isOpen, onClose, addItemToCart }: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
      onClick={onClose} // 🔥 Fecha ao clicar fora
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // 🔥 Impede o fechamento ao clicar dentro do modal
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl">
          ✖
        </button>
        <img src={product.imageUrl} alt={product.name} className="w-full  object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-500 text-lg font-medium">R$ {product.price.toFixed(2)}</p>
        <p className="text-gray-700 mt-2 text-sm">{product.description}</p>
        <button
          onClick={() => addItemToCart(product)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          🛒 Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
