interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantityInCart: number;
  rating: {
    rate: number;
    count: number;
  };
}
interface Statistic {
  id: number;
  icon: string;
  number: number;
  description: string;
}

interface FetchProductsResult {
  data: Product[] | null;
  error: Error | null;
  loading: boolean;
}

type ProductData = Product[] | null;
type LoadingData = boolean;
type ErrorData = Error | null;
