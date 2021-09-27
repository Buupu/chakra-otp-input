import { HStack, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState, KeyboardEvent } from "react";

export const OTPInput = ({ noInputs }: OTPProps) => {
  const [input, setInput] = useState<string[]>([]);
  const [activeInput, setActiveInput] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>([]);

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
    tempInput[activeInput] = e.target.value;
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
          maxLength={1}
          w={12}
          h={12}
          p={0}
          textAlign="center"
          boxShadow="sm"
          bg="white"
          onInput={moveToNextInput}
          onKeyDown={handleKeyDown}
          value={input[i] || ""}
          onChange={(e) => {
            setCurrentFocusValue(e);
          }}
          onFocus={() => {
            setActiveInputOnFocus(i);
          }}
          ref={(ref: HTMLInputElement) => (inputRefs.current[i] = ref)}
        />
      );
    }

    return inputs;
  };
  return <HStack>{getInputs()}</HStack>;
};

interface OTPProps {
  noInputs: number;
}
