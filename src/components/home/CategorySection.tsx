/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Lightbox, { Slide, SlideImage } from "yet-another-react-lightbox";
import {
  Captions,
  Counter,
  Inline,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import ArtworkCategory from "../models/ArtworkCategory";
import ArtworkImage from "../models/ArtworkImage";

// TODO: 4

export const ArtGallery = ({ artworks }: { artworks: ArtworkImage[] }) => {
  const [index, setIndex] = useState(0);
  const [openState, setOpenState] = useState(false);
  return (
    <div>
      <Lightbox
        index={index}
        slides={artworks}
        plugins={[Inline]}
        on={{
          view: ({ index }) => setIndex(index),
          click: () => setOpenState(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "contain",
          finite: true,
        }}
        inline={{
          style: {
            aspectRatio: "16/10 auto",
            margin: "0 auto",
          },
        }}
      
        render={{
          slide: ({ slide }: { slide: Slide }) => {
            const slideImage: SlideImage = slide as SlideImage;
            return (
              <img
                src={slideImage.src}
                alt=""
                className=""
                onClick={(event) => {
                  event.stopPropagation(); // Prevent propagation issues
                  setOpenState(true); // Open the modal
                }}
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                }}
              />
            );
          },
        }}
      />
      <Lightbox
        slides={artworks}
        open={openState}
        index={index}
        close={() => setOpenState(false)}
        captions={{ descriptionTextAlign: "center" }}
        // enable optional lightbox plugins
        plugins={[Captions, Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </div>
  );
};

const CategoryList = ({
  artworkCategory,
}: {
  artworkCategory: ArtworkCategory;
}) => {
  return (
    <div className="accordion light-black" id="categoryAccordion">
      {Object.entries(artworkCategory).map(([category, artworks], index) => {
        const categoryId = category.toLowerCase().replace(" ", "");
        if (artworks.length <= 0) {
          return "";
        }
        return (
          <div key={`accordion${index}`} className="accordion-item">
            <div className="accordion-header">
              <a
                className="accordion-button collapsed light-black text-white text-decoration-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${categoryId}`}
                aria-expanded="false"
                aria-controls={categoryId}
              >
                {category}
              </a>
            </div>
            <div
              id={categoryId}
              className="accordion-collapse collapse"
              data-bs-parent="#categoryAccordion"
            >
              <div className="accordion-body px-0">
                <ArtGallery artworks={artworks} />
              </div>
              {artworks.length > 3 ? (
                <div className="border-top bg-black text-white text-center text-decoration-none p-2 d-block fs-5">
                  <Link
                    href={`/gallery/category/${category}`}
                    className="btn btn-dark border border-white px-4"
                  >
                    View More...
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CategorySection = ({
  artworkCategory,
}: {
  artworkCategory: ArtworkCategory;
}) => {
  return (
    <section className="container my-2">
      <h3 className="text-center py-4">Categories</h3>
      <CategoryList artworkCategory={artworkCategory} />
    </section>
  );
};
export default CategorySection;
