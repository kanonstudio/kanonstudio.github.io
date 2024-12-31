import fs from "fs";
import path from "path";

import { getImageSize } from "./FileUtils";

const basePath = path.join(process.cwd(), "public");

const remoteImagePath = "/images/artworks/";
const remoteThumbnailPath = "/images/thumbnails/";

export interface LoadedImage {
  localPath: string;
  remotePath: string;
  width: number;
  height: number;
}

export function getImage(image: string) {
  let imagePath: string | null = path.join(
    basePath,
    "images",
    "artworks",
    image,
  );
  let thumbnailPath: string | null = path.join(
    basePath,
    "images",
    "thumbnails",
    image, 
  );

  const placeholderImagePath = path.join(
    basePath,
    "images",
    "artworks",
    "placeholder.png",
  );
  const placeholderThumbnailPath = path.join(
    basePath,
    "images",
    "thumbnails",
    "placeholder.png",
  );

  if (!fs.existsSync(imagePath)) {
    console.log('Image Not Found: '+imagePath);
    imagePath = null;
  }
  if (!fs.existsSync(thumbnailPath)) {
    console.log('Thumbnail Not Found: '+thumbnailPath);
    thumbnailPath = null;
  }
  const imageDimensions = getImageSize(imagePath || placeholderImagePath);
  const thumbnailDimensions = getImageSize(
    imagePath || placeholderThumbnailPath,
  );

  const localImage: LoadedImage = {
    localPath: imagePath || placeholderImagePath,
    remotePath: remoteImagePath + (imagePath ? image : "placeholder.png"),
    width: imageDimensions.width,
    height: imageDimensions.height,
  };

  const localThumbnail: LoadedImage = {
    localPath: thumbnailPath || placeholderThumbnailPath,
    remotePath:
      remoteThumbnailPath + (thumbnailPath ? image : "placeholder.png"),
    width: thumbnailDimensions.width,
    height: thumbnailDimensions.height,
  };

  return {
    image: localImage,
    thumbnail: localThumbnail,
  };
}
