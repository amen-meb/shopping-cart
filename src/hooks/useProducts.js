import { useEffect, useState } from "react";

export default function useProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
            "https://fakestoreapi.com/products"
            );

            if (!response.ok) {
            throw new Error("Failed to fetch products");
            }

            const data = await response.json();

            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        }

        fetchProducts();
    }, []);

    return{
        products,
        loading,
        error,
    };

    }