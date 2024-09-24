import { Product } from "../types";

type ProductDetailProps = {
    product: Product;
};

function ProductDetails({ product }: ProductDetailProps) {
    return <div>{product.name}</div>;
}

export default ProductDetails;
