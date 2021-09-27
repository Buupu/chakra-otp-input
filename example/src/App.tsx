import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { OTPInput } from "../../";

export const App = () => (
  <ChakraProvider theme={theme}>
    <OTPInput />
  </ChakraProvider>
);
