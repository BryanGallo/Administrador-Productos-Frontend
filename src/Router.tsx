import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import NewProduct from "./views/NewProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "product/new",
                element: <NewProduct />,
            },
        ],
    },
    {
        path: "*",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <h1>Pagina no encontrada</h1>,
            },
        ],
    },
]);
