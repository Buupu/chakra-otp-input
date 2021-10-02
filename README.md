# chakra-otp-input

One Time Password Component Package for Chakra UI

## Codesandbox Link [Here](https://githubbox.com/Buupu/chakra-otp-input/tree/main/demo)

## NPM Link [Here](https://www.npmjs.com/package/chakra-otp-input)

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
    <td>If true, sets the OTP inputs to be disabled.</td>
  </tr>
   <tr>
    <td>isError</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>If true, will display error styles to inputs.</td>
  </tr>
   <tr>
    <td>isNumeric</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>If true, only numeric values will be allowed.</td>
  </tr>
  <tr>
    <td>isPrivate</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>If true, input values will be masked.</td>
  </tr>
  <tr>
    <td>isPasteDisabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>If true, disables pasting into inputs.</td>
  </tr>
  <tr>
    <td>spacing</td>
    <td>string | number</td>
    <td>false</td>
    <td>8px</td>
    <td>Spacing between input elements. Can be passed as px or spacing key.</td>
  </tr>
   <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>false</td>
    <td>-</td>
    <td>Placeholder for input elements. Recommended to be max 1 character.</td>
  </tr>
</table>

## Running project

- Clone this repository

```sh
git clone https://github.com/Buupu/chakra-otp-input.git
```

- Install all dependencies

```sh
npm i
```

- Install package example dependencies

```sh
cd example
npm i
```

- Start the package server, and the example server

```sh
# root directory
npm start

# example directory
npm run dev
```
