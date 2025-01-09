/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";

import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";
import { allArtworkSlides } from "@/components/Global";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import PhotoGallery from "@/components/custom/PhotoGallery";

export const ImageWithPlaceholder = ({
  image,
  thumbnail,
}: {
  image: string;
  thumbnail?: string;
}) => {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <>
      <img
        src={image}
        onLoad={() => {
          setLoaded(true);
        }}
        className="col-6 custom-slide-image mx-auto"
        style={{
          display: `${isLoaded ? "block" : "none"}`,
        }}
      />
      <img
        src={thumbnail || "/assets/whatsapp.png"}
        className="col-6 custom-slide-image mx-auto my-auto"
        style={{
          display: `${!isLoaded ? "block" : "none"}`,
        }}
      />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      allArtworks: allArtworkSlides,
    },
  };
};

export const GalleryPageLayout = ({
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
      <Footer />
    </>
  );
};

const GalleryPageBreadCrumb = () => {
  return (
    <section>
      {/* breadcrumbs */}
      <nav aria-label="breadcrumb">
        <div className="breadcrumb light-black m-0 p-4">
          <div className="breadcrumb-item">
            <Link href="/">Home</Link>
          </div>
          <div className="breadcrumb-item active" aria-current="page">
            Gallery
          </div>
        </div>
      </nav>
    </section>
  );
};
const GalleryPage = ({
  allArtworks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [index, setIndex] = useState(-1);
  return (
    <GalleryPageLayout title="Artwork Gallery">
      <GalleryPageBreadCrumb />
      <div className="container my-4">
        <h3 className="text-center py-2">Artwork Gallery</h3>
        <PhotoGallery photos={allArtworks} index={index} setIndex={setIndex} />
      </div>
      <div className="text-center my-4">
        <Link href="/gallery/category" className="text-decoration-none btn btn-dark"> View All Categories </Link>
      </div>
    </GalleryPageLayout>
  );
};
export default GalleryPage;
