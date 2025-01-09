/* eslint-disable @next/next/no-img-element */
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { SearchPageLayout } from "@/ui/layouts/search";
import BlogPost from "@/components/models/BlogPost";
import { blogPosts } from "@/components/Global";
import HumanizeTime from "@/components/custom/HumanizeTime";
import { stripMarkdown } from "@/components/utils/TextUtils";



export const getStaticProps = async () => {
  return {
    props: {
      blogPosts: blogPosts,
    },
  };
};



export const BlogPostView = ({ post }: { post: BlogPost }) => {
  return (
    <div className="card col-md-4">
      <img
        src={post.cover_picture || "/images/author.jpg"}
        className="card-img-top"
        alt={post.title}
        style={{ aspectRatio: "16/10", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle">{post.subtitle}</h6>
        <small className="card-title">
          {post.author} - <HumanizeTime timestamp={post.timestamp} />
        </small>
        <p className="card-text flex-fill">
          {stripMarkdown(post.content.split(" ").splice(0, 32).join(" "))}
        </p>
        <div>
          <Link href={"/blog/post/" + post.id} className="btn bg-dark border-light">
            Continue Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

const Search = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "No query found";
  const results = blogPosts.filter((post: BlogPost) => {
    return post.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <SearchPageLayout title="Search">
      <div className="container">
        <div>Search Query: {query}</div>
        <div>Search Results: {results.length}</div>
        <div className="d-md-flex justify-content-evenly my-4 m-4">
          {results.map((post: BlogPost, index: number) => {
            return <BlogPostView key={index} post={post} />;
          })}
        </div>
      </div>
    </SearchPageLayout>
  );
};

export default Search;
