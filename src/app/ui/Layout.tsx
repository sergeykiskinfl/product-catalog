import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../../widgets/navbar";

export function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Box as="main" className={"page-container"}>
        <Outlet />
      </Box>
      ;
    </>
  );
}
