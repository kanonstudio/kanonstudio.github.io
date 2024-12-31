import { Photo } from "react-photo-album";
import { Slide } from "yet-another-react-lightbox";

import Artwork from './Artwork';

type ArtworkSlide = { meta?: Artwork } & Photo & Slide;

export default ArtworkSlide;
