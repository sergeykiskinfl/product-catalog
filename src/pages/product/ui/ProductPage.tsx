import { useLocation, useNavigate } from "react-router-dom";

export function ProductPage(): JSX.Element {
  const { pathname } = useLocation();
  const productId = pathname.split("/")[2];

  return <p>Welcome to product {productId}</p>;
}
