import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { blogPosts } from "@/components/Global";
import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";

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
      <div className="container">
        <h1>Blog Posts</h1>
        {blogPosts.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    </BlogPageLayout>
  );
};
export default Blog;
