import { safeParse } from "valibot";
import axios from "axios";
import { DraftProductSchema } from "../types";

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
        } else {
            throw new Error("Datos no validos");
        }
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
