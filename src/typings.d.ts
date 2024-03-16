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
interface RatingProps {
  rating: number;
}
interface FetchProductsResult {
  data: Product[] | null;
  error: Error | null;
  loading: boolean;
}
