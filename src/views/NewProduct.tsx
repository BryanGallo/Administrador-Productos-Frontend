import { Link, Form } from "react-router-dom";
// import { Request } from "express";

export async function action({ request }) {
    const data = Object.fromEntries(await request.formData());
    console.log(data);
    return {};
}

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
            <Form className="mt-10" method="POST" action="">
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor="name">
                        Nombre Producto:
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Nombre del Producto"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor="price">
                        Precio:
                    </label>
                    <input
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Precio Producto. ej. 200, 300"
                        name="price"
                    />
                </div>
                <div className="mb-4">
                    <label className="text-gray-800" htmlFor="price">
                        Descripción:
                    </label>
                    <input
                        id="description"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Galaxy S21 Ultra"
                        name="description"
                    />
                </div>
                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Registrar Producto"
                />
            </Form>
        </>
    );
}
