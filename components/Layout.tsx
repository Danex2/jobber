import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box display="flex" flexDirection="column" minH="100vh">
        <Navbar />
        <Box as="main" flex={1} style={{ background: "#EDF2F7" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
