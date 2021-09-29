import { HStack, Input, InputElementProps } from "@chakra-ui/react";
import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

export const OTPInput = (props: OTPProps) => {
  const {
    noInputs,
    onChange,
    isDisabled,
    isNumeric,
    isPrivate,
    spacing,
    ...rest
  } = props;
  const [input, setInput] = useState<string[]>([]);
  const [activeInput, setActiveInput] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    let inputString = "";

    input.forEach((c) => (inputString += c));

    onChange(inputString);
  }, [input]);

  useEffect(() => {
    inputRefs.current[activeInput]?.focus();
  }, [activeInput]);

  const checkNumeric = (char: string) => {
    return "0123456789".includes(char);
  };

  const moveToNextInput = () => {
    if (activeInput !== noInputs - 1) {
      setActiveInput(activeInput + 1);
    }
  };

  const moveToPrevInput = () => {
    if (activeInput !== 0) {
      setActiveInput(activeInput - 1);
    }
  };

  const clearCurrentFocusValue = () => {
    const tempInput = [...input];
    tempInput[activeInput] = "";
    setInput(tempInput);
  };

  const setCurrentFocusValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputChar = e.target.value.slice(-1);

    if (isNumeric && !checkNumeric(newInputChar)) {
      return;
    }

    const tempInput = [...input];
    tempInput[activeInput] = newInputChar;
    setInput(tempInput);
    moveToNextInput();
  };

  const setActiveInputOnFocus = (focusIndex: number) => {
    if (activeInput !== focusIndex) {
      setActiveInput(focusIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Backspace":
        clearCurrentFocusValue();
        moveToPrevInput();
        e.preventDefault();
        break;
      case "Space":
      case "Spacebar":
      case " ":
        e.preventDefault();
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveToPrevInput();
        break;
      case "ArrowRight":
        e.preventDefault();
        moveToNextInput();
        break;
    }
  };

  const handleOnPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (isDisabled) {
      return;
    }

    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, noInputs - activeInput)
      .split("");

    if (pastedData.length === 0) {
      return;
    }

    const tempInput: string[] = [...input];
    let tempActiveInput = activeInput;

    for (let i = 0; i < noInputs; i++) {
      if (pastedData.length > 0 && i >= activeInput) {
        tempInput[i] = pastedData.shift() || "";
        tempActiveInput++;
        if (tempActiveInput === noInputs) {
          tempActiveInput--;
        }
      }
    }
    setInput(tempInput);
    setActiveInput(tempActiveInput);
  };

  const getInputs = () => {
    const inputs = [];

    for (let i = 0; i < noInputs; i++) {
      inputs.push(
        <Input
          key={`otp-input-${i}`}
          {...baseStyles}
          {...rest}
          onKeyDown={handleKeyDown}
          value={input[i] || ""}
          isDisabled={isDisabled}
          onChange={setCurrentFocusValue}
          onFocus={() => {
            setActiveInputOnFocus(i);
          }}
          onPaste={handleOnPaste}
          type={isPrivate ? "password" : ""}
          ref={(ref: HTMLInputElement) => (inputRefs.current[i] = ref)}
        />,
      );
    }

    return inputs;
  };
  return <HStack spacing={spacing || 2}>{getInputs()}</HStack>;
};

const baseStyles: InputElementProps = {
  w: "12",
  h: "12",
  p: "0",
  textAlign: "center",
  boxShadow: "md",
  bg: "white",
  fontWeight: "bold",
  fontSize: "lg",
};

interface OTPProps extends Omit<InputElementProps, "onChange"> {
  noInputs: number;
  isDisabled?: boolean;
  isNumeric?: boolean;
  isPrivate?: boolean;
  spacing?: string | number;
  onChange: (value: string) => void;
}
