# chakra-otp-input

One Time Password Component Package for Chakra UI

## Install

```bash
npm i chakra-otp-input
```

## Usage

### Basic Usage

```js
import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import * as React from "react";
import { OTPInput } from "chakra-otp-input";

export default function App() {
  return (
    <Flex pt="48" justify="center" align="center" w="full">
      <FormControl w="60">
        <OTPInput noInputs={6} onChange={(value) => console.log(value)} />
      </FormControl>
    </Flex>
  );
}
```

## API

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>noInputs</td>
    <td>number</td>
    <td>true</td>
    <td>-</td>
    <td>Number of inputs to be rendered.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td>true</td>
    <td>-</td>
    <td>Returns OTP value as a string to the function provided.</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Sets the OTP inputs to be disabled.</td>
  </tr>
</table>
