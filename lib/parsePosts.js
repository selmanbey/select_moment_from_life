import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts_md");

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((name) => {
    return {
      params: {
        postId: name.replace(/\.md$/, ""),
      },
    };
  });
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // remove file extension (.md) to get id

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); // convert file content to a string

    const { data } = matter(fileContents); // parse metadata

    return { id, ...data }; // combine metadata with the id
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)); // sort posts by date
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  let { data, content } = matter(fileContent);
  content = await remark().use(html).process(content); // parse markdown content to html
  content = content.toString(); // parse html to string

  return { id, content, ...data };
}
