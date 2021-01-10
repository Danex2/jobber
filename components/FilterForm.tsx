import { Box, Button, Input, Select, Stack } from "@chakra-ui/react";

type FilterFormProps = {
  setOrder(order: any);
  setType(type: any);
  setText(input: any);
};

export default function FilterForm({
  setOrder,
  setType,
  setText,
}: FilterFormProps) {
  return (
    <Box as="form" maxW="2xl" mx="auto" pt={100} px={5}>
      <Input
        type="text"
        mb={10}
        style={{ background: "#FFFAFA" }}
        placeholder="Search listings"
        onChange={(e) => setText(e.target.value)}
        data-cy="listings-input"
      />
      <Stack direction="row" spacing={10}>
        <Select
          w={1 / 2}
          style={{ background: "#FFFAFA" }}
          onChange={(e) => setOrder(e.target.value)}
          data-cy="date-select"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
        <Select
          w={1 / 2}
          style={{ background: "#FFFAFA" }}
          onChange={(e) => setType(e.target.value)}
          data-cy="type-select"
        >
          <option value="Full Time">Full-time</option>
          <option value="Part Time">Part-time</option>
          <option value="Contract">Contract</option>
        </Select>
      </Stack>
    </Box>
  );
}
