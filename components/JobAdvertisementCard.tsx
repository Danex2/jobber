import { Box, Stack, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

type JobProps = {
  job: JobAdvertisement;
};

type JobAdvertisement = {
  id: string;
  title: string;
  description: string;
  postedAt: string;
  locationNames: string;
  commitment: {
    title: string;
  };
  company: {
    name: string;
  };
};

export default function JobAdvertisementCard({ job }: JobProps) {
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
        <Text fontWeight="bold" fontSize="2xl">
          {job.company.name}
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {job.title}
        </Text>
      </Box>
      <Stack direction="row" fontSize="xs" color="white" mt={2}>
        <Text bg="black" p={1} px={3}>
          {job.locationNames || "N/A"}
        </Text>
        <Text bg="black" p={1} px={3}>
          {job.commitment.title}
        </Text>
      </Stack>
      <Box noOfLines={3} mt={10} fontSize="sm" opacity="0.7">
        <ReactMarkdown children={job.description} />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="auto"
        alignItems="baseline"
      >
        <Text fontSize="xs" opacity="0.5" fontWeight="semibold">
          {job.postedAt}
        </Text>
        <Text
          fontSize="xs"
          bg="black"
          color="white"
          px={3}
          py={2}
          fontWeight="semibold"
        >
          View more
        </Text>
      </Box>
    </Box>
  );
}
