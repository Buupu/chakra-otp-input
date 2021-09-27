import { HStack, Input } from "@chakra-ui/react";
import React from "react";

export const OTPInput = ({ noInputs }: OTPProps) => {
  const getInputs = () => {
    const inputs = [];

    for (let i = 0; i < noInputs; i++) {
      inputs.push(<Input maxlength={1} />);
    }

    return inputs;
  };
  return <HStack>{getInputs()}</HStack>;
};

interface OTPProps {
  noInputs: number;
}
