import { Box, Stack, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

type JobProps = {
  job: JobAdvertisement;
};

type JobAdvertisement = {
  id: string;
  company: string;
  description: string;
  created_at: string;
  location: string;
  type: string;
  title: string;
};

export default function JobAdvertisementCard({ job }: JobProps) {
  const [open, setOpen] = useState(false);
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
        flexDirection="column"
      >
        <Text fontWeight="bold" fontSize="2xl">
          {job.company}
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {job.title}
        </Text>
      </Box>
      <Stack direction="row" fontSize="xs" color="white" mt={2}>
        <Text bg="black" p={1} px={3}>
          {job.location || "N/A"}
        </Text>
        <Text bg="black" p={1} px={3}>
          {job.type}
        </Text>
      </Stack>
      <Box
        noOfLines={open ? Infinity : 3}
        mt={10}
        fontSize="sm"
        opacity="0.7"
        mb={10}
      >
        <ReactMarkdown children={job.description} allowDangerousHtml />
        <Box mt={10}>
          <ReactMarkdown children={job["how_to_apply"]} allowDangerousHtml />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="auto"
        alignItems="baseline"
      >
        <Text fontSize="xs" opacity="0.5" fontWeight="semibold">
          {formatDistanceToNow(new Date(job.created_at))} ago
        </Text>
        <Text
          fontSize="xs"
          bg="black"
          color="white"
          px={3}
          py={2}
          fontWeight="semibold"
          cursor="pointer"
          onClick={() => setOpen(!open)}
        >
          View more
        </Text>
      </Box>
    </Box>
  );
}
