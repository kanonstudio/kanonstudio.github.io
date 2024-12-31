import Artwork from "./Artwork";
import { LoadedImage } from "../utils/ImageUtils";

interface LoadedArtwork {
    image: LoadedImage,
    thumbnail: LoadedImage,
    meta: Artwork
}

export default LoadedArtwork;