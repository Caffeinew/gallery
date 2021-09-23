import "tailwindcss/tailwind.css";
import "../style/global.css";
import { Router } from "next/dist/client/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useState, createContext } from "react";

Nprogress.configure({ showSpinner: false, rickleSpeed: 50 });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

export const Context = createContext();

export default function app({ Component, pageProps }) {
  const [context, setContext] = useState({
    page: 1,
    terms: "",
    images: [],
    search: "",
    scroll: 0,
  });
  return (
    <Context.Provider value={[context, setContext]}>
        <Component {...pageProps} />
    </Context.Provider>
  );
}
