import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { OTPInput } from "../../";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box width="300px" h="100vh">
      <OTPInput noInputs={5} />
    </Box>
  </ChakraProvider>
);
