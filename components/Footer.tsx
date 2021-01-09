import { Box, Stack, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="black" py={50} color="#FFFAFA">
      <Stack
        direction="row"
        display="flex"
        justifyContent="center"
        fontWeight="semibold"
        spacing={30}
        textTransform="uppercase"
        fontSize="xs"
      >
        <Link href="https://twitter.com/hybridearth" isExternal>
          Twitter
        </Link>
        <Link href="https://github.com/Danex2/jobber" isExternal>
          Github
        </Link>
      </Stack>
    </Box>
  );
}
