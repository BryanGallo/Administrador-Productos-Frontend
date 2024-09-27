import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailProps = {
    product: Product;
};

function ProductDetails({ product }: ProductDetailProps) {
    return (
        <tr className="border-b text-center">
            <td className="p-3 text-lg text-gray-800">{product.name}</td>
            <td className="p-3 text-lg text-gray-800">{product.description}</td>
            <td className="p-3 text-lg text-gray-800 ">
                {formatCurrency(+product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {product.availability}
            </td>
        </tr>
    );
}

export default ProductDetails;
