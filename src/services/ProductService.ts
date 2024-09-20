import { safeParse } from "valibot";
import axios from "axios";
import { DraftProductSchema, ProductsSchema} from "../types";

type ProductData = {
    [k: string]: FormDataEntryValue;
};

export default async function addProduct(data: ProductData) {
    console.log(data);
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: Number(data.price),
            description: data.description,
        });

        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`;
            const { data } = await axios.post(url, {
                name: result.output.name,
                price: result.output.price,
                description: result.output.description,
            });
            console.log(data);
        } else {
            throw new Error("Datos no validos");
        }
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const { data } = await axios.get(url);
        console.log(data.data);
        const result = safeParse(ProductsSchema, data.data);
        console.log(result);
        
        if (result.success) {
            return result.output;
        } else {
            throw new Error("Error al obtener los productos");
        }
    } catch (error) {
        console.log(error);
    }
}
