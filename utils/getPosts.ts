import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPosts = (filterBy: string) => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  function sortFunction(a: any, b: any) {
    var dateA = Date.parse(a.frontMatter.date);
    var dateB = Date.parse(b.frontMatter.date);
    return dateA > dateB ? -1 : 1;
  }

  const sortedPostsData = posts.sort(sortFunction);

  const response =
    filterBy === "none"
      ? sortedPostsData
      : sortedPostsData.filter((post) => {
          return post.frontMatter.category === filterBy;
        });

  return response;
};
