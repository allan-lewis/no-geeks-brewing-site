import { load } from "../graphql/Batches"
import { Batches } from "../types/Batches"
import BatchPage from "../components/BatchPage";
import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    return load("completed")
}

const OnTap: NextPage = (batches: Batches) => {
    return (
      <>
          <BatchPage batches={batches.batches} />
      </>
    )
};
  
export default OnTap;