interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface FetchProductsResult {
  data: Product[] | null;
  error: Error | null;
  loading: boolean;
}

type ProductData = Product[] | null;
type LoadingData = boolean;
type ErrorData = Error | null;
