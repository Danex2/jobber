import { Box, Input, Select } from "@chakra-ui/react";

export default function Filter() {
  <Box as="form">
    <Input type="text" />
    <Select placeholder="This week">
      <option value="option1">Option 1</option>
    </Select>
    <Select placeholder="Full-time">
      <option value="full-time">Full-time</option>
      <option value="part-time">Part-time</option>
      <option value="contract">Contract</option>
    </Select>
  </Box>;
}
