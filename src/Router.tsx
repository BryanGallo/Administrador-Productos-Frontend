import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
    },
]);
