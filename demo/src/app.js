import {
  Flex,
  VStack,
  useNumberInput,
  Button,
  HStack,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  useBoolean,
  Switch,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { OTPInput } from "chakra-otp-input";

export const App = () => {
  const [isDisabled, setIsDisabled] = useBoolean();
  const [isNumeric, setIsNumeric] = useBoolean();
  const [isPrivate, setIsPrivate] = useBoolean();
  const [isPasteDisabled, setIsPasteDisabled] = useBoolean();
  const [isError, setIsError] = useBoolean();
  const [placeholder, setPlaceholder] = useState("🏀");

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
          <FormLabel>Placeholder</FormLabel>
          <Input
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
          <FormHelperText>Recommended to be 1 character.</FormHelperText>
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
        <FormControl>
          <FormLabel>Paste Disabled?</FormLabel>
          <Switch
            size="lg"
            checked={isPasteDisabled}
            onChange={setIsPasteDisabled.toggle}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Error?</FormLabel>
          <Switch size="lg" checked={isError} onChange={setIsError.toggle} />
        </FormControl>
      </VStack>
      <Flex flex={1} justify="center" align="center" background="blue.900">
        <OTPInput
          noInputs={noInputs}
          onChange={handleOTP}
          isNumeric={isNumeric}
          isError={isError}
          isDisabled={isDisabled}
          isPrivate={isPrivate}
          isPasteDisabled={isPasteDisabled}
          spacing={`${spacing}px`}
          placeholder={placeholder}
        />
      </Flex>
    </Flex>
  );
};

export default App;
