import {
  Flex,
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
import { OTPInput } from "chakra-otp-input";

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

  const handleOTP = (value) => {
    console.log(value);
  };

  return (
    <Flex w="full" h="100vh" flexDirection={["column", "column", "row"]}>
      <VStack w={["full", "full", "300px"]} p={3} borderRight="2px">
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
          noInputs={parseInt(noInputs)}
          onChange={handleOTP}
          isNumeric={isNumeric}
          isDisabled={isDisabled}
        />
      </Flex>
    </Flex>
  );
};

export default App;
