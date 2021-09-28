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
