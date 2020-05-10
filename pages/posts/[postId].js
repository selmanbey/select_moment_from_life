// import { useRef, useLayoutEffect } from "react";
import Layout, { rootUrl } from "../../components/layout";
import { getPostIds, getPostData } from "../../lib/parsePosts";

export default function Post({ postData }) {
  const { title, id, date, city, country, image, content } = postData;
  let imagePath = `/img/post-img/${image}`;

  let meta = {
    title,
    description: "A random memory from life",
    og: {
      title,
      description: "A random memory from life",
      url: `${rootUrl}/posts/${id}`,
      image: imagePath,
    },
  };

  return (
    <Layout meta={meta}>
      <article>
        <h1 className="title mb-0">{title}</h1>
        <h2 className="text-wld-2 text-sm font-light mb-1">
          {date && <span>{date}</span>} {(city || country) && " : "}
          {city && <span>{city}</span>}
          {city && country && " / "}
          {country && <span>{country}</span>}
        </h2>
        {image && <img className="mt-6" src={imagePath} alt={title} />}
        <div
          className="my-8"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </article>
    </Layout>
  );
}

export function getStaticPaths() {
  let paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let postData = await getPostData(params.postId);
  return {
    props: {
      postData,
    },
  };
}
