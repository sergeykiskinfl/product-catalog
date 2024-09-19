import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { router } from "./router";

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
