import { products } from "../../data/products.json" assert { type: "json" };

export const productsLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800)); //emulate 800ms delay
  return products;
};
