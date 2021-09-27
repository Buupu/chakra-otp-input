import { HStack, Input } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

export const OTPInput = ({ noInputs }: OTPProps) => {
  const [activeInput, setActiveInput] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current[activeInput]?.focus();
  }, [activeInput]);

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
          onInput={() => setActiveInput(i + 1)}
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
