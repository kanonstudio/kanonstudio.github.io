/* eslint-disable @next/next/no-img-element */
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { artworkCategories, artworkCategory } from "@/components/Global";

import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";

export const getStaticProps = async () => {
  return {
    props: {
      categories: artworkCategories,
      artworkCategory: artworkCategory,
    },
  };
};

export const ArtworkGalleryPageLayout = ({
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

const ArtworkGalleryPage = ({
  categories,
  artworkCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ArtworkGalleryPageLayout title="Blog">
      <div className="container">
        <h1 className="text-center">Artwork Categories</h1>
        <div className="list-group d-block d-md-flex flex-row flex-wrap justify-content-evenly my-4">
          {categories.map((category, index) => {
            const thumbnail = artworkCategory[category][0] || {
              src: "",
            };
            return (
              <a
                href={"/gallery/category/" + category}
                key={index}
                className="list-group-item mx-auto border rounded m-2"
              >
                <div
                  className="d-flex mx-auto"
                  style={{
                    backgroundImage: "url(" + thumbnail.src + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    width: "200px",
                    height: "200px",
                  }}
                >
                  <div className="mx-auto my-auto">{category}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </ArtworkGalleryPageLayout>
  );
};
export default ArtworkGalleryPage;
