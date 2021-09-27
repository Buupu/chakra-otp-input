import {
  Flex,
  ChakraProvider,
  theme,
  VStack,
  useNumberInput,
  Button,
  HStack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { OTPInput } from "../../";

export const App = () => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    value: noInputs,
  } = useNumberInput({
    defaultValue: 6,
    min: 1,
    max: 12,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <ChakraProvider theme={theme}>
      <Flex w="full" h="100vh">
        <VStack w="300px" p={3} borderRight="2px">
          <FormControl>
            <FormLabel>Number of inputs</FormLabel>
            <HStack maxW="320px">
              <Button {...dec} colorScheme="teal">
                -
              </Button>
              <Input {...input} />
              <Button {...inc} colorScheme="teal">
                +
              </Button>
            </HStack>
          </FormControl>
        </VStack>
        <Flex flex={1} justify="center" align="center" background="blue.900">
          <OTPInput noInputs={noInputs} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
