/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Zoom } from "yet-another-react-lightbox/plugins";

import RecentArtwork from "../models/RecentArtwork";

// TODO: Max 8

const RecentGallery = ({
  recentArtworks,
}: {
  recentArtworks: RecentArtwork[];
}) => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="mx-auto m-4">
      <MasonryPhotoAlbum
        photos={recentArtworks}
        onClick={({ index }) => setIndex(index)}
        columns={(containerWidth) => {
          if (containerWidth <= 576) return 1;
          if (containerWidth <= 768) return 3;
          return 4;
        }}
        render={{
          image: (props) => (
            <img src={props.src} alt={props.title} className="w-100 h-auto" />
          ),
        }}
      />
      <Lightbox
        slides={recentArtworks}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        captions={{ descriptionTextAlign: "center" }}
        // enable optional lightbox plugins
        plugins={[Captions, Counter, Zoom]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </div>
  );
};

const GallerySection = ({ artworks }: { artworks: RecentArtwork[] }) => {
  return (
    <section className="container my-2">
      <h3 className="text-center py-4">Recent Artworks</h3>
      <RecentGallery recentArtworks={artworks} />
    </section>
  );
};

export default GallerySection;
