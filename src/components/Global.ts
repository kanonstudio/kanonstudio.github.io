import {
  processAllArtworks,
  processArtworks,
  processBannerArtworks,
  processCategories,
  processRecentArtworks,
} from "./utils/processArtworks";
import processBlogPosts from "./utils/processBlogPosts";

export const allArtworks = processAllArtworks();
export const allArtworkSlides = processArtworks(allArtworks);
export const bannerArtworks = processBannerArtworks(allArtworks);
export const recentArtworks = processRecentArtworks(allArtworks);
export const artworkCategory = processCategories(allArtworks);
export const artworkCategories = Object.keys(artworkCategory);

export const blogPosts = processBlogPosts();
