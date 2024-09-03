import { Link } from "react-router-dom";

export default function NewProduct() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">
                    Registrar Producto
                </h2>
                <Link
                    to="/"
                    className="rounded-md bg-indigo-600 text-sm p-3 font-bold text-white shadow-md hover:bg-indigo-700"
                >
                    Volver a Productos
                </Link>
            </div>
        </>
    );
}
