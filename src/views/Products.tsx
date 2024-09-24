import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductService";

export async function loader() {
    const products = await getProducts();
    console.log(products);

    //* Ya sea loader o action deben devolver algo a traves de un return
    return products;
}

function Products() {
    const products = useLoaderData();

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
            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Disponibilidad</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </>
    );
}

export default Products;
