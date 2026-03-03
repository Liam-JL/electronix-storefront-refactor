import { products } from "../../data/products.json" assert { type: "json" };
import type { LoaderFunctionArgs } from "react-router";

export const productDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  await new Promise((resolve) => setTimeout(resolve, 800)); //emulate 800ms delay
  if (!id) {
    throw new Response("Product not found", { status: 404 });
  }
  const product = products.find((p) => p.id === Number(id.slice(1))); //remove : at start of id
  return product;
};
