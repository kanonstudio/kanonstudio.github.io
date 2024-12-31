/* eslint-disable @next/next/no-img-element */
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Zoom } from "yet-another-react-lightbox/plugins";

import { artworkCategories, artworkCategory } from "@/components/Global";
import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";

export const getStaticPaths = async () => {
  const paths = artworkCategories.map((category) => ({
    params: { category: `${category}` },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { category } = context.params as { category: string };
  const artworks = artworkCategory[category] ?? [];
  return {
    props: {
      category,
      artworks: artworks,
    },
  };
};

export const CategoryPageLayout = ({
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

const CategoryBreadCrumb = ({ category }: { category: string }) => {
  return (
    <section>
      {/* breadcrumbs */}
      <nav aria-label="breadcrumb">
        <div className="breadcrumb light-black m-0 p-4">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
          </div>
          <div className="breadcrumb-item">
            <Link href="/gallery">Gallery</Link>
          </div>
          <div className="breadcrumb-item">
            <Link href="/gallery/category">Category</Link>
          </div>
          <div className="breadcrumb-item active" aria-current="page">
            {category}
          </div>
        </div>
      </nav>
    </section>
  );
};
const CategoryPage = ({
  category,
  artworks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [index, setIndex] = useState(-1);

  return (
    <CategoryPageLayout title={`Category: ${category}`}>
      <CategoryBreadCrumb category={category} />
      <section className="p-4">
        <h1 className="text-center py-2">{category}</h1>
        <MasonryPhotoAlbum
          photos={artworks}
          onClick={({ index }) => setIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth < 576) return 1;
            else if (containerWidth < 576 && containerWidth < 768) return 3;
            return 4;
          }}
        />
        <Lightbox
          slides={artworks}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          captions={{ descriptionTextAlign: "center" }}
          // enable optional lightbox plugins
          plugins={[Captions, Counter, Zoom]}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        />
      </section>
    </CategoryPageLayout>
  );
};
export default CategoryPage;
