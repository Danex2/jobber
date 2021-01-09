import { Button, Stack } from "@chakra-ui/react";
import JobAdvertisementCard from "@/components/JobAdvertisementCard";
import SkeletonLoader from "@/components/SkeletonLoader";

// pass filter values here and filter before mapping

export default function SearchContainer({
  jobArrayChunks,
  size,
  setSize,
  order,
  type,
  searchText,
}) {
  return (
    <Stack maxW="2xl" mx="auto" mt={10} px={5} pb={100} spacing={5}>
      {!jobArrayChunks ? (
        <SkeletonLoader />
      ) : (
        jobArrayChunks.map((jobArray) =>
          jobArray
            .sort((a, b) => {
              if (order === "newest") {
                return (
                  Number(new Date(b.created_at)) -
                  Number(new Date(a.created_at))
                );
              }
              return -1;
            })
            .filter((job) => job.type === type)
            .filter((job) =>
              !searchText
                ? job
                : job.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  job.company.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((job) => <JobAdvertisementCard key={job.id} job={job} />)
        )
      )}
      <Button
        onClick={() => setSize(size + 1)}
        type="submit"
        bg="black"
        color="#FFFAFA"
        _hover={{
          bg: "gray.700",
        }}
      >
        Load more
      </Button>
    </Stack>
  );
}
