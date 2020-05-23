import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/parsePosts";
import { PostData } from "../types";
import React from "react";

export default function Home({ posts }: { posts: PostData[] }) {
  return (
    <Layout home>
      <section>
        <ul className="list-none">
          {posts.map(({ id, date, title }) => (
            <li className="group" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>
                  <p>
                    <span className="hidden absolute -ml-4 group-hover:block">
                      •
                    </span>
                    {title}{" "}
                    <span className="text-xs text-wld-2 italic">({date})</span>
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  };
}
