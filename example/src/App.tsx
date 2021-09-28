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
  useBoolean,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { OTPInput } from "../../";

export const App = () => {
  const [isDisabled, setIsDisabled] = useBoolean();
  const [isNumeric, setIsNumeric] = useBoolean();
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

  const handleOTP = (value: string) => {
    console.log(value);
  };

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
          <FormControl>
            <FormLabel>Numeric?</FormLabel>
            <Switch
              size="lg"
              checked={isNumeric}
              onChange={setIsNumeric.toggle}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Disabled?</FormLabel>
            <Switch
              size="lg"
              checked={isDisabled}
              onChange={setIsDisabled.toggle}
            />
          </FormControl>
        </VStack>
        <Flex flex={1} justify="center" align="center" background="blue.900">
          <OTPInput
            noInputs={noInputs as number}
            onChange={handleOTP}
            isNumeric={isNumeric}
            isDisabled={isDisabled}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
