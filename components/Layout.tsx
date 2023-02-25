import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
    return (
      <>
        <Head>
            <title>No Geeks Brewing</title>
        </Head>
        <Header/>
        <main>
          <section>{children}</section>
        </main>
      </>
    )
}
