import { Box, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="black" color="white" py={50}>
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        fontWeight="semibold"
        spacing={30}
        textTransform="uppercase"
        fontSize="xs"
      >
        <Text>Twitter</Text>
        <Text>Github</Text>
        <Text>Contact</Text>
      </Stack>
    </Box>
  );
}
