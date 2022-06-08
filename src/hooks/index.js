import { useState } from "react";
import * as service from "../services";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const result = await service.fetchProducts();
      setProducts(result)
    } catch (error) {
      console.error(error);
    }
  }

  return [products, fetchProducts];
}
