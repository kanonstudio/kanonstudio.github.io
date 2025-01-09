import { marked } from "marked";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

import { blogPosts } from "@/components/Global";
import BlogPost from "@/components/models/BlogPost";
import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";

export const getStaticPaths = async () => {
  const paths = blogPosts.map((blog) => ({
    params: { id: `${blog.id}` },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params!;
  const post: BlogPost = blogPosts.find((post) => post.id === id) || blogPosts[0];

  return {
    props: {
      post: post,
      posts: blogPosts,
    },
  };
};

export const BlogPostLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>{`${title} - KanonStudio.github.io`}</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
      </Head>
      <Header position="sticky-top" />
      {children}
      <Footer fab />
    </>
  );
};

export const BlogPostSection = ({
  post,
  markedPost,
}: {
  post: BlogPost;
  markedPost: string | Promise<string>;
}) => {
  return (
    <div className="col-lg-8 me-lg-4 mb-4 mb-lg-0">
      <div className="border rounded blog-post-background text-black">
        <div className="blog-header p-2 rounded bg-black"
        style={
          {
            backgroundImage: `url(${post.cover_picture || "/images/author.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }
        }>
          <h1 className="p-0 m-0 fw-bolder text-outline">{post.title}</h1>
          <div className="text-secondary d-flex flex-column">
            <a
              href={post.author_link || "/about"}
              target="_blank"
              className="text-decoration-none fw-bold mb-3 author-text"
            >
              {post.author || "Kamran Ahmed Kanon"}
            </a>
            <small className="me-2" style={{ fontSize: "12px" }}>
              Posted on 11/29/2024
            </small>
          </div>
          <div className="d-inline-flex">
            <span className="badge rounded-pill text-bg-secondary me-2">
              Literature
            </span>
            <span className="badge rounded-pill text-bg-secondary">
              Art Review
            </span>
          </div>
        </div>
        <div
          className="p-4 markdown-body bg-transparent post-content"
          dangerouslySetInnerHTML={{ __html: markedPost }}
        />
      </div>
    </div>
  );
};
export const OtherSection = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return (
    <div className="col-lg">
      <div className="card light-black mb-4">
        <h6 className="card-header p-2">Recent Posts</h6>
        <div className="card-body list-group list-group-numbered list-group-flush p-0">
          {blogPosts.map((post, index) => {
            return (
              <div
                key={index}
                className="list-group-item p-4 py-2 bg-transparent"
              >
                <a href={`/blog/post/${post.id}`}>{post.title}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card light-black">
        <h6 className="card-header p-2">Categories</h6>
        <ul className="card-body p-4">
          <li>Literature</li>
          <li>Art Review</li>
          <li>Personal Feeling</li>
        </ul>
      </div>
    </div>
  );
};

const BlogView = ({
  post,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const markedPost = marked(post.content);
  return (
    <BlogPostLayout title={`${post.title}`}>
      <section>
        {/* breadcrumbs */}
        <nav aria-label="breadcrumb">
          <div className="breadcrumb light-black m-0 p-4">
            <div className="breadcrumb-item">
              <Link href="/">Home</Link>
            </div>
            <div className="breadcrumb-item">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="breadcrumb-item active" aria-current="page">
              {post.title}
            </div>
          </div>
        </nav>
      </section>
      <section className="d-lg-flex p-4">
        <BlogPostSection post={post} markedPost={markedPost} />
        <OtherSection blogPosts={posts} />
      </section>
    </BlogPostLayout>
  );
};
export default BlogView;
