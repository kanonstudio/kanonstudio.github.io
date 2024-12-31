"use client";

import { GetStaticProps, InferGetStaticPropsType } from "next";

import {
  allArtworks,
  artworkCategory,
  bannerArtworks,
  blogPosts,
  recentArtworks,
} from "@/components/Global";

import artistInfo from "@/data/artist.json";

import { RootLayout } from "@/ui/layouts/root";
import BannerSection from "@/components/home/BannerSection";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import CategorySection from "@/components/home/CategorySection";
import BlogSection from "@/components/home/BlogSection";

// for Static Site Generation (SSG)
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allArtworks,
      bannerArtworks,
      recentArtworks,
      artworkCategory,
      blogPosts,
      artistInfo
    },
  };
};

const IndexPage = ({
  bannerArtworks,
  recentArtworks,
  artworkCategory,
  blogPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <RootLayout title={"Index"}>
      <BannerSection bannerArtworks={bannerArtworks} />
      <AboutSection artistInfo={artistInfo}/>
      <GallerySection artworks={recentArtworks} />
      <CategorySection artworkCategory={artworkCategory} />
      <BlogSection blogPosts={blogPosts} />
    </RootLayout>
  );
};
export default IndexPage;
