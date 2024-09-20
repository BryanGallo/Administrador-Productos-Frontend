import { Link } from "react-router-dom";
import { getProducts } from "../services/ProductService";

export async function loader() {
    const products = await getProducts();
    console.log(products);

    //* Ya sea loader o action deben devolver algo a traves de un return
    return {};
}

function Products() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Products</h2>
                <Link
                    to="products/new"
                    className="rounded-md bg-indigo-600 text-sm p-3 font-bold text-white shadow-md hover:bg-indigo-700"
                >
                    Agregar Producto
                </Link>
            </div>
        </>
    );
}

export default Products;
