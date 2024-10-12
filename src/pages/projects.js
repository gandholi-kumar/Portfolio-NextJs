import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const projects = () => {
  return (
    <>
      <Head>
        <title>saiarunkumar | Projects page</title>
        <meta name="description" content="Projects section" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-0 pb-44">
          Projects work in-progress 👨‍🏭. Appreciate you for your patience 😀.
        </Layout>
      </main>
    </>
  );
};

export default projects;
