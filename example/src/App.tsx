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
  const [isPrivate, setIsPrivate] = useBoolean();
  const [isPasteDisabled, setIsPasteDisabled] = useBoolean();
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
          <FormControl>
            <FormLabel>Paste Disabled?</FormLabel>
            <Switch
              size="lg"
              checked={isPasteDisabled}
              onChange={setIsPasteDisabled.toggle}
            />
          </FormControl>
        </VStack>
        <Flex flex={1} justify="center" align="center" background="blue.900">
          <OTPInput
            noInputs={parseInt(noInputs as string)}
            onChange={handleOTP}
            isNumeric={isNumeric}
            isDisabled={isDisabled}
            isPrivate={isPrivate}
            isPasteDisabled={isPasteDisabled}
            spacing={`${spacing}px`}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
