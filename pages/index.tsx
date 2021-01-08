import Layout from "@/components/Layout";
import SearchListContainer from "@/components/SearchListContainer";
import { request } from "graphql-request";
import FilterForm from "@/components/FilterForm";
import useSWR from "swr";

const fetcher = (query) => request("https://api.graphql.jobs", query);

export default function Home({ jobs }) {
  const { data, error } = useSWR(
    `{
        jobs {
          id
          title
          slug
          description
          postedAt
          locationNames
          commitment {
            title
          }
          company {
            name
          }
        }
  }`,
    fetcher,
    {
      initialData: jobs,
    }
  );

  return (
    <Layout title="Home">
      <FilterForm />
      <SearchListContainer jobs={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const jobs = await request(
    "https://api.graphql.jobs",
    `{
        jobs {
          id
          title
          slug
          description
          postedAt
          locationNames
          commitment {
            title
          }
          company {
            name
          }
        }
  }`
  );
  return {
    props: {
      jobs,
    },
  };
}
