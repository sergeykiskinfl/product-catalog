import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export function Layout(): JSX.Element {
  return <Box as="main" className={"page-container"}>
    <Outlet />
  </Box>;
}
