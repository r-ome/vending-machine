import { products } from "../constants"

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}