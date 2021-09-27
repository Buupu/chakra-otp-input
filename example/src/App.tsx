import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl"></Box>
  </ChakraProvider>
);
