import Layout from "@/components/Layout";
import SearchListContainer from "@/components/SearchListContainer";
import { request, gql } from "graphql-request";
import FilterForm from "@/components/FilterForm";

export default function Home({ jobs }) {
  return (
    <Layout title="Home">
      <FilterForm />
      <SearchListContainer jobs={jobs} />
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
