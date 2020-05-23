import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import { LayoutProps } from "../types";
import * as React from "react";

export const rootUrl = "amomentfromlife.com"; // TODO: Change it to real thing when you have it

export default function Layout({ children, home, meta }: LayoutProps) {
  // get metadata from props if exists, or else add default values
  let title = meta && meta.title ? meta.title : "SELECT moment FROM life";

  let description =
    meta && meta.description
      ? meta.description
      : "A curated gallery of random memories.";

  let og =
    meta && meta.og
      ? meta.og
      : {
          title,
          description,
          url: rootUrl,
          image: undefined, // TODO: Find an image
        };

  return (
    <div className="max-w-xl py-0 px-4 my-12 mx-auto">
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* metadata for open graph (facebook etc) previews */}
        <meta name="og:title" content={og.title} />
        <meta name="og:description" content={og.description} />
        <meta name="og:image" content={og.image} />
        <meta name="og:url" content={og.url} />
        {/* metadata for twitter previews */}
        <meta name="twitter:title" content={og.title} />
        <meta name="twitter:description" content={og.description} />
        <meta name="twitter:image" content={og.image} />
        <meta name="twitter:url" content={og.url} />
      </Head>

      <Header />

      <main>{children}</main>
      {!home && (
        <Link href="/">
          <a className="font-semibold text-wld-5 hover:text-wld-3">
            ← Back to home
          </a>
        </Link>
      )}
    </div>
  );
}
