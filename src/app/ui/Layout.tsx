import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../../widgets/navbar";
import { useGetLocalSavedCartProducts } from "../model/useGetLocalSavedCartProducts";

export function Layout(): JSX.Element {
  useGetLocalSavedCartProducts();

  return (
    <>
      <Navbar />
      <Box as="main" className={"page-container"}>
        <Outlet />
      </Box>
    </>
  );
}
