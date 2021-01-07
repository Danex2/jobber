import { Stack } from "@chakra-ui/react";
import JobAdvertisementCard from "@/components/JobAdvertisementCard";

export default function SearchContainer({ jobs }) {
  return (
    <Stack maxW="2xl" mx="auto" mt={10} px={5} pb={140} spacing={5}>
      {jobs.jobs.map((job) => (
        <JobAdvertisementCard key={job.id} job={job} />
      ))}
    </Stack>
  );
}
