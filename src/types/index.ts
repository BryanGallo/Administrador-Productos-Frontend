import { boolean, number, object, string, array, InferOutput } from "valibot";

export const DraftProductSchema = object({
    name: string(),
    price: number(),
    description: string(),
});

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: string(),//debido a que lo guardamos como decimal necesitamos transformarlo
    description: string(),
    availability: boolean(),
});

export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput <typeof ProductSchema>
