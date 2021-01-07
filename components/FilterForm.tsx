import { Box, Button, Input, Select, Stack } from "@chakra-ui/react";

export default function FilterForm() {
  return (
    <Box as="form" maxW="2xl" mx="auto" pt={140} px={5}>
      <Input
        type="text"
        mb={10}
        style={{ background: "#FFFAFA" }}
        placeholder="Search for your next role"
      />
      <Stack direction="row" spacing={10}>
        <Select placeholder="Today" w={1 / 3} style={{ background: "#FFFAFA" }}>
          <option value="this-week">This week</option>
          <option value="this-month">This month</option>
        </Select>
        <Select
          placeholder="Full-time"
          w={1 / 3}
          style={{ background: "#FFFAFA" }}
        >
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </Select>
        <Button
          type="submit"
          w={1 / 3}
          bg="black"
          color="#FFFAFA"
          _hover={{
            bg: "gray.700",
          }}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
}
