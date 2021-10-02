import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OTPInput } from "../";

test("Renders correct number of input fields", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  expect(otpInputFields).toHaveLength(3);
});

test("Returns correct input", () => {
  let input;

  render(<OTPInput onChange={(value) => (input = value)} noInputs={3} />);

  const otpInputFields: HTMLInputElement[] = screen.getAllByTestId(
    "chakra-otp-input-field",
  );

  userEvent.type(otpInputFields[0], "c");
  userEvent.type(otpInputFields[1], "a");
  userEvent.type(otpInputFields[2], "r");

  expect(input).toEqual("car");
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

test("Checks inputs aren't set to password type", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isPrivate={false} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  otpInputFields.forEach((input) =>
    expect(input).toHaveProperty("type", "text"),
  );
});

test("Checks inputs are set to password type", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isPrivate={true} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  otpInputFields.forEach((input) =>
    expect(input).toHaveProperty("type", "password"),
  );
});

test("Checks inputs aren't set to password type", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isPrivate={false} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  otpInputFields.forEach((input) =>
    expect(input).toHaveProperty("type", "text"),
  );
});

test("Checks inputs are set to password type", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isPrivate={true} />);

  const otpInputFields = screen.getAllByTestId("chakra-otp-input-field");

  otpInputFields.forEach((input) =>
    expect(input).toHaveProperty("type", "password"),
  );
});

test("Checks isNumeric prop blocks user entering non number characters", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isNumeric={true} />);

  const otpInputFields: HTMLInputElement[] = screen.getAllByTestId(
    "chakra-otp-input-field",
  );

  userEvent.type(otpInputFields[0], "a");

  expect(otpInputFields[0].value).toEqual("");
});

test("Checks isNumeric prop still allows user to enter numbers", () => {
  render(<OTPInput onChange={() => {}} noInputs={3} isNumeric={true} />);

  const otpInputFields: HTMLInputElement[] = screen.getAllByTestId(
    "chakra-otp-input-field",
  );

  userEvent.type(otpInputFields[0], "1");

  expect(otpInputFields[0].value).toEqual("1");
});
