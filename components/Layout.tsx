import Head from "next/head";
import Menu from "./Menu";

export default function Layout({ children }) {
    return (
      <>
        <div className="container">
            <div id="left" className="column">
                <div className="top-left">Placeholder for logo</div>
                <div className="bottom"><Menu/></div>
            </div>
            <div id="right" className="column">
                <div className="top-right">
                      <span>No Geeks Brewing</span>
                </div>
                <div className="bottom"><section>{children}</section></div>
            </div>
        </div>
      </>
    )
}
