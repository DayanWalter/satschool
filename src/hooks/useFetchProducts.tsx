import { useEffect, useState } from "react";

export default function useFetchProducts() {
  // Hooks
  const [data, setData] = useState<ProductData>(null);
  const [loading, setLoading] = useState<LoadingData>(true);
  const [error, setError] = useState<ErrorData>(null);

  // Effect
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=8`,
        );

        if (!response.ok) {
          throw new Error(`This is an HTTP error`);
        }

        const responseJSON: Product[] = await response.json();
        setData(responseJSON);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
}
