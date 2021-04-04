import 'tailwindcss/tailwind.css'
import '../style/global.css'
import { Router } from "next/dist/client/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

Nprogress.configure({ showSpinner: false });
export default function app({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
