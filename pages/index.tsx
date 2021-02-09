import Layout from "@/components/Layout";
import SearchListContainer from "@/components/SearchListContainer";
import FilterForm from "@/components/FilterForm";
import { useSWRInfinite } from "swr";
import { useState } from "react";

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `/api/positions/${pageIndex}`; // SWR key
};

const fetcher = (args) => fetch(args).then((res) => res.json());

export default function Home() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
  const [order, setOrder] = useState("newest");
  const [type, setType] = useState("Full Time");
  const [text, setText] = useState("");

  return (
    <Layout title="Home">
      <FilterForm setOrder={setOrder} setType={setType} setText={setText} />
      <SearchListContainer
        jobArrayChunks={data}
        size={size}
        setSize={setSize}
        order={order}
        type={type}
        searchText={text}
      />
    </Layout>
  );
}
