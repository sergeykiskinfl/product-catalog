import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { Layout } from "../ui/Layout";
import { ProductListPage } from "../../pages/products-list";
import { CartPage } from "../../pages/cart";
import { ProductPage } from "../../pages/product";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);
