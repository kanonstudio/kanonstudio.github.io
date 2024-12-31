import { Photo } from "react-photo-album";
import { Slide } from "yet-another-react-lightbox";

import Artwork from "./Artwork";


type BannerArtwork = {
  active?: boolean;
  meta: Artwork;
} & Photo &
  Slide;

export default BannerArtwork;
