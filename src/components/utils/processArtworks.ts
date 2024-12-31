import { getImage } from "./ImageUtils";
import Artwork from "../models/Artwork";
import ArtworkCategory from "../models/ArtworkCategory";
import ArtworkImage from "../models/ArtworkImage";
import BannerArtwork from "../models/BannerArtwork";
import LoadedArtwork from "../models/LoadedArtwork";
import RecentArtwork from "../models/RecentArtwork";

import allArtworkJson from "@/data/all_artworks.json";
import bannerArtworkJson from "@/data/banner_arts.json";
import recentArtworkJson from "@/data/recent_arts.json";
import ArtworkSlide from "../models/ArtworkSlide";

// Banner Artworks
export function processAllArtworks() {
  const loadedArtworks: Artwork[] = allArtworkJson as Artwork[];

  const processedArtworks: LoadedArtwork[] = loadedArtworks.map((artwork) => {
    const { image, thumbnail } = getImage(artwork.image || "");
    const _item: LoadedArtwork = {
      image: image,
      thumbnail: thumbnail,
      meta: artwork,
    };

    return _item;
  });
  return processedArtworks;
}

// All Artworks
export function processArtworks(allArtworks: LoadedArtwork[]) {
  const artworks: ArtworkSlide[] = allArtworks
    .map((artwork) => {
      const _item: ArtworkSlide = {
        src: artwork.thumbnail.remotePath,
        title: artwork.meta.title,
        description: `${artwork.meta.artType} (${artwork.meta.artSize})`,
        width: artwork.thumbnail.width,
        height: artwork.thumbnail.height,
        srcSet: [
          {
            src: artwork.image.remotePath,
            width: artwork.image.width,
            height: artwork.image.height,
          },
        ],
        meta: artwork.meta,
      };

      return _item;
    })
    .filter(Boolean) as ArtworkSlide[];
  return artworks;
}
// Banner Artworks
export function processBannerArtworks(allArtworks: LoadedArtwork[]) {
  const loadedArtworks = bannerArtworkJson as Artwork[];
  const bannerArtworks: BannerArtwork[] = loadedArtworks
    .filter((artwork) => artwork.id)
    .map((artwork) => {
      const _artwork = allArtworks.find((item) => item.meta.id === artwork.id);
      if (!_artwork) {
        return null;
      }
      const _item: BannerArtwork = {
        src: _artwork.thumbnail.remotePath,
        title: artwork.title || _artwork.meta.title,
        description: `${artwork.artType || _artwork.meta.artType} (${
          artwork.artSize || _artwork.meta.artSize
        })`,
        width: _artwork.thumbnail.width,
        height: _artwork.thumbnail.height,
        srcSet: [
          {
            src: _artwork.image.remotePath,
            width: _artwork.image.width,
            height: _artwork.image.height,
          },
        ],
        meta: _artwork.meta,
      };

      return _item;
    })
    .filter(Boolean) as BannerArtwork[];
  return bannerArtworks;
}

// Recent Artworks
export function processRecentArtworks(allArtworks: LoadedArtwork[]) {
  const loadedArtworks: Artwork[] = recentArtworkJson as Artwork[];
  const recentArtworks: RecentArtwork[] = loadedArtworks
    .filter((artwork) => artwork.id)
    .map((artwork) => {
      const _artwork = allArtworks.find((item) => item.meta.id === artwork.id);
      if (!_artwork) {
        return null;
      }
      const _item: RecentArtwork = {
        src: _artwork.thumbnail.remotePath,
        title: artwork.title || _artwork.meta.title,
        description: `${artwork.artType || _artwork.meta.artType} (${
          artwork.artSize || _artwork.meta.artSize
        })`,
        width: _artwork.thumbnail.width,
        height: _artwork.thumbnail.height,
        srcSet: [
          {
            src: _artwork.image.remotePath,
            width: _artwork.image.width,
            height: _artwork.image.height,
          },
        ],
        meta: _artwork.meta,
      };

      return _item;
    })
    .filter(Boolean) as BannerArtwork[];
  return recentArtworks;
}

export function processCategories(allArtworks: LoadedArtwork[]) {
  const categories: ArtworkCategory = {
    Uncategorized: [],
  };

  allArtworks.forEach((artwork) => {
    const _artwork: ArtworkImage = {
      src: artwork.thumbnail.remotePath,
      title: artwork.meta.title,
      description: `${artwork.meta.artType} (${artwork.meta.artSize})`,
      width: artwork.thumbnail.width,
      height: artwork.thumbnail.height,
      srcSet: [
        {
          src: artwork.image.remotePath,
          width: artwork.image.width,
          height: artwork.image.height,
        },
      ],
    };
    const category = artwork.meta.category!;

    if (category) {
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(_artwork);
    } else {
      categories["Uncategorized"].push(_artwork);
    }
  });
  const sortedCategories = Object.keys(categories).sort((a, b) =>
    a.localeCompare(b),
  );
  const sortedCategoriesObject: ArtworkCategory = {};
  sortedCategories.forEach((key) => {
    sortedCategoriesObject[key] = categories[key];
  });
  return sortedCategoriesObject;
}
