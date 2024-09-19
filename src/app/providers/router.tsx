import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../ui/Layout";
import { ProductListPage } from "../../pages/products-list";
import { CartPage } from "../../pages/card";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);
