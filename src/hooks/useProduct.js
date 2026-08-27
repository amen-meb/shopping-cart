import { useEffect, useState } from "react";

import API_URL from "../config/api";

function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);
        setProduct(null);

        const response = await fetch(
          `${API_URL}/products/${id}`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    if (id) {
      fetchProduct();
    } else {
      setError("Product ID is missing");
      setLoading(false);
    }

    return () => {
      controller.abort();
    };
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}

export default useProduct;