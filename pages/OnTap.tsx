import type { NextPage } from "next";
import BatchPage from "../components/BatchPage";

const OnTap: NextPage = () => {
  return (
    <>
    <BatchPage title="On Tap" filter="Completed" />
  </>
  )
};

export default OnTap;
