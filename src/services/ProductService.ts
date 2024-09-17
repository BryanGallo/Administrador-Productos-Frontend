import { safeParse } from "valibot";
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
            console.log('vamos a conectarnos con axios ');
            
        } else {
            throw new Error("Datos no validos");
        }
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
