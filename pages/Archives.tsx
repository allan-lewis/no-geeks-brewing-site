import type { NextPage } from "next";
import BatchPage from "../components/BatchPage";

const Archives: NextPage = () => {
  return (
    <>
    <BatchPage title="Archives" filter="Archived" />
  </>
  )
};

export default Archives;
