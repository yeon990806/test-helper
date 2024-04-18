import 'react-tooltip/dist/react-tooltip.css'
import type { LinksFunction } from "@remix-run/node";
import CommonHeader from "./components/CommonHeader";
import stylesheet from "~/tailwind.css?url";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import useTestStore from "./store/useTestStore";
import { useLayoutEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const {content} = useTestStore()

  useLayoutEffect(()=> {
    if (content.length == 0) navigate('/')
  }, [content, navigate])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen bg-neutral-200">
        {location.pathname !== '/' && <CommonHeader />}
        <div className="flex-1">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
