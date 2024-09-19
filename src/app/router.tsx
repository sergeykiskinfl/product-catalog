import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { ProductListPage } from "../pages/product-list";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/"  element={<ProductListPage />}></Route>)
);
