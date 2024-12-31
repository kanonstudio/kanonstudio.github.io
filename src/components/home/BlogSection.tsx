/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import HumanizeTime from "../custom/HumanizeTime";
import BlogPost from "../models/BlogPost";
import { stripMarkdown } from "../utils/TextUtils";

const BlogPostView = ({ post }: { post: BlogPost }) => {
  return (
    <div className="card col-md-4 me-md-2 my-2 my-md-0">
      <img
        src={post.cover_picture || "/images/author.jpg"}
        className="card-img-top"
        alt={post.title}
        style={{ aspectRatio: "16/10", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle">{post.subtitle}</h6>
        <small className="card-title">{post.author} - <HumanizeTime timestamp={post.timestamps}/></small>
        <p className="card-text flex-fill">
          {stripMarkdown(post.content.split(" ").splice(0, 32).join(" "))}
        </p>
        <div>
          <Link
            href={"/blog/" + post.id}
            className="btn bg-dark border-light"
          >
            Continue Reading
          </Link>
        </div>
      </div>
    </div>
  );
};
/* eslint-disable @next/next/no-img-element */
export const RecentBlogPosts = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return (
    <div className="">
      <div className="d-md-flex justify-content-evenly blog-post-list">
        {blogPosts.map((post, index) => {
          return <BlogPostView key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

const BlogSection = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return (
    <section className="container my-2">
      <h3 className="text-center py-4">Recent Posts</h3>
      <RecentBlogPosts blogPosts={blogPosts} />
    </section>
  );
};
export default BlogSection;
