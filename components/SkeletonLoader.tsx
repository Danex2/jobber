import { Box, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export default function SkeletonLoader() {
  return (
    <Box
      background="#FFFAFA"
      px={5}
      py={5}
      minH="300px"
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        alignItems="baseline"
        justifyContent="space-between"
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <Skeleton w={100} h={5} />
        <Skeleton w={150} h={5} />
      </Box>
      <Stack direction="row" fontSize="xs" color="white" mt={2}>
        <Skeleton h={5} w={20} />
        <Skeleton h={5} w={20} />
      </Stack>
      <SkeletonText noOfLines={5} mt={10} />
      <Box
        display="flex"
        justifyContent="space-between"
        mt="auto"
        alignItems="baseline"
      >
        <Skeleton h={5} w={40} />
        <Skeleton h={10} w={32} />
      </Box>
    </Box>
  );
}
