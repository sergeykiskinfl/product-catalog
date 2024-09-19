import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { ProductListPage } from "../../pages/products-list";
import { Layout } from "../ui/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<ProductListPage />} />
    </Route>
  )
);
