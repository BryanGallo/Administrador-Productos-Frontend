import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailProps = {
    product: Product;
};

function ProductDetails({ product }: ProductDetailProps) {
    const navigate = useNavigate();
    const isAvailability = product.availability;
    return (
        <tr className="border-b text-center">
            <td className="p-3 text-lg text-gray-800">{product.name}</td>
            <td className="p-3 text-lg text-gray-800">{product.description}</td>
            <td className="p-3 text-lg text-gray-800 ">
                {formatCurrency(+product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailability ? "Disponible" : "No disponible"}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <div className="flex gap-2 items-center justify-center">
                    <button
                        onClick={() => navigate(`products/${product.id}/edit`)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Editar
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default ProductDetails;
