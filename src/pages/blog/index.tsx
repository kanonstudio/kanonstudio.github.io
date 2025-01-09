import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { blogPosts } from "@/components/Global";
import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      blogPosts: blogPosts,
    },
  };
};

export const BlogPageLayout = ({
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

const Blog = ({
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BlogPageLayout title="Blog">
      <div className="container my-4">
        <h1 className="text-center">Blog Posts</h1>
        <div className="list-group list-group-numbered">
        {blogPosts.map((post) => {
          return <div key={post.id} className="list-group-item"><Link href={'/blog/post/'+post.id} className="text-decoration-none">{post.title}</Link> - {post.author}</div>;
        })}
        </div>
      </div>
    </BlogPageLayout>
  );
};
export default Blog;
