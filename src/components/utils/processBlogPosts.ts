import fs from "fs";
import matter from "gray-matter";
import path from "path";

import BlogPost from "../models/BlogPost";

const basePath = path.join(process.cwd(), "src", "data");

export default function processBlogPosts() {
  const blogPath = path.join(basePath, "posts");
  const blogPosts: BlogPost[] = [];

  const loadedBlogPostFiles = fs
    .readdirSync(blogPath, { withFileTypes: true })
    .filter((item) => !item.isDirectory());

  loadedBlogPostFiles.forEach((file, index) => {
    const blogFilePath = path.join(blogPath, file.name);
    const fileContent = fs.readFileSync(blogFilePath);
    const { data, content } = matter(fileContent);


    const post: BlogPost = {
      id: index + 1,
      title: data.title || "Untitled",
      subtitle: data.subtitle || null,
      author: data.author || "Kamran Ahmed Kanon",
      author_link: data.author_link || "/about",
      cover_picture: data.cover_picture || null,
      content: content,
      timestamps: (data.timestamp as number) * 1000 || Date.now(),
    };
    blogPosts.push(post);
  });

  return blogPosts;
}
