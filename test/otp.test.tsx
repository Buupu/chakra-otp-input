import React from "react";
import { render, screen } from "@testing-library/react";

import { OTPInput } from "../";

test("Renders correct number of input fields", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  expect(otpInputFields).toHaveLength(3);
});

test("Checks inputs are disabled", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isDisabled={true} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  otpInputFields.forEach((input) =>
    expect(input).toHaveProperty("disabled", true),
  );
});

test("Checks inputs are not disabled", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isDisabled={false} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  otpInputFields.forEach((input) =>
    expect(input).toHaveProperty("disabled", false),
  );
});
