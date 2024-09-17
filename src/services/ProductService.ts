type ProductData = {
    [k: string]: FormDataEntryValue;
};

export default async function addProduct(data: ProductData) {
    console.log(data);
}
