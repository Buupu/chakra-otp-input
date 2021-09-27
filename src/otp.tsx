import { HStack, Input } from "@chakra-ui/react";
import React from "react";

export const OTPInput = ({ noInputs }: OTPProps) => {
  const getInputs = () => {
    const inputs = [];

    for (let i = 0; i < noInputs; i++) {
      inputs.push(
        <Input
          maxlength={1}
          w={12}
          h={12}
          p={0}
          textAlign="center"
          boxShadow="sm"
          bg="white"
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
