import { HStack, Input, InputElementProps } from "@chakra-ui/react";
import React, { useEffect, useRef, useState, KeyboardEvent } from "react";

export const OTPInput = ({ noInputs, onChange, isDisabled }: OTPProps) => {
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
    const tempInput = [...input];
    tempInput[activeInput] = e.target.value.slice(-1);
    setInput(tempInput);
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

  const getInputs = () => {
    const inputs = [];

    for (let i = 0; i < noInputs; i++) {
      inputs.push(
        <Input
          key={`otp-input-${i}`}
          {...baseStyles}
          onInput={moveToNextInput}
          onKeyDown={handleKeyDown}
          value={input[i] || ""}
          isDisabled={isDisabled}
          onChange={(e) => {
            setCurrentFocusValue(e);
          }}
          onFocus={() => {
            setActiveInputOnFocus(i);
          }}
          ref={(ref: HTMLInputElement) => (inputRefs.current[i] = ref)}
        />,
      );
    }

    return inputs;
  };
  return <HStack>{getInputs()}</HStack>;
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

interface OTPProps {
  noInputs: number;
  onChange: (value: string) => void;
  isDisabled?: boolean;
}
