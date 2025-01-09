import fs from "fs";
import matter from "gray-matter";
import path from "path";

import BlogPost from "../models/BlogPost";
import { hash } from "crypto";

const basePath = path.join(process.cwd(), "src", "data");

export default function processBlogPosts() {
  const blogPath = path.join(basePath, "posts");
  const blogPosts: BlogPost[] = [];

  const loadedBlogPostFiles = fs
    .readdirSync(blogPath, { withFileTypes: true })
    .filter((item) => !item.isDirectory());

  loadedBlogPostFiles.forEach((file) => {
    const blogFilePath = path.join(blogPath, file.name);
    const fileContent = fs.readFileSync(blogFilePath);
    const { data, content } = matter(fileContent);
  

    

    const post: BlogPost = {
      title: data.title || "Untitled",
      subtitle: data.subtitle || null,
      author: data.author || "Kamran Ahmed Kanon",
      author_link: data.author_link || "/about",
      cover_picture: data.cover_picture || "/images/author.jpg",
      content: content,
      timestamp: (data.timestamp as number) * 1000 || Date.now(),
    };
    
    const post_id: string = hash('sha256', post.title + post.author + post.timestamp);

    post.id = post_id;
    blogPosts.push(post);
  });

  blogPosts.sort((a, b) => b.timestamp - a.timestamp);

  return blogPosts;
}
