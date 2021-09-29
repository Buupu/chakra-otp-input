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
  const [isPrivate, setIsPrivate] = useBoolean();
  const {
    getInputProps: getNoInputsProps,
    getIncrementButtonProps: getNoInputsIncProps,
    getDecrementButtonProps: getNoInputsDecProps,
    value: noInputs,
  } = useNumberInput({
    defaultValue: 6,
    min: 1,
    max: 12,
  });

  const incNoInputs = getNoInputsIncProps();
  const decNoInputs = getNoInputsDecProps();
  const noInputsProps = getNoInputsProps();

  const {
    getInputProps: getSpacingProps,
    getIncrementButtonProps: getSpacingIncProps,
    getDecrementButtonProps: getSpacingDecProps,
    value: spacing,
  } = useNumberInput({
    defaultValue: 8,
    min: 0,
    max: 100,
  });

  const incSpacing = getSpacingIncProps();
  const decSpacing = getSpacingDecProps();
  const spacingProps = getSpacingProps();

  const handleOTP = (value) => {
    console.log(value);
  };

  return (
    <Flex w="full" h="100vh" flexDirection={["column", "column", "row"]}>
      <VStack w={["full", "full", "300px"]} p={3} borderRight="2px">
        <FormControl>
          <FormLabel>Number of inputs</FormLabel>
          <HStack maxW="320px">
            <Button {...decNoInputs} colorScheme="teal">
              -
            </Button>
            <Input {...noInputsProps} />
            <Button {...incNoInputs} colorScheme="teal">
              +
            </Button>
          </HStack>
        </FormControl>
        <FormControl>
          <FormLabel>Spacing</FormLabel>
          <HStack maxW="320px">
            <Button {...decSpacing} colorScheme="teal">
              -
            </Button>
            <Input {...spacingProps} />
            <Button {...incSpacing} colorScheme="teal">
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
        <FormControl>
          <FormLabel>Private?</FormLabel>
          <Switch
            size="lg"
            checked={isPrivate}
            onChange={setIsPrivate.toggle}
          />
        </FormControl>
      </VStack>
      <Flex flex={1} justify="center" align="center" background="blue.900">
        <OTPInput
          noInputs={parseInt(noInputs)}
          onChange={handleOTP}
          isNumeric={isNumeric}
          isDisabled={isDisabled}
          isPrivate={isPrivate}
          spacing={`${spacing}px`}
        />
      </Flex>
    </Flex>
  );
};

export default App;
