import { ComponentPropsWithRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Zoom } from "yet-another-react-lightbox/plugins";

import BannerArtwork from "../models/BannerArtwork";



type BannerItemProps = {
  banner: BannerArtwork;
} & ComponentPropsWithRef<"div">;

const BannerItemComponent = ({ banner, ...args }: BannerItemProps) => {
  const bgImageStyle: React.CSSProperties = {
    background: "no-repeat center center scroll",
    backgroundImage: `url("${banner.src}")`,
    backgroundSize: "cover",
  };
  return (
    <div
      className={`carousel-item${banner.active ? " active" : ""}`}
      data-bs-interval="5000"
      style={bgImageStyle}
      {...args}
    >
      {/* <img src={image} className="d-block w-100" alt="..." /> */}
      <div className="carousel-caption text-end text-white">
        <h2 className="text-uppercase mb-2">{banner.title}</h2>
        {banner.meta.subtitle ? <small>{banner.meta.subtitle}</small> : ""}
        <div className="d-flex flex-column">
          <small>{banner.meta.artType}</small>
          <small>{banner.meta.artSize}</small>
        </div>
      </div>
    </div>
  );
};

export const BannerCarousel = ({
  bannerArtworks,
}: {
  bannerArtworks: BannerArtwork[];
}) => {
  const [imageIndex, setImageIndex] = useState(-1);

  return (
    <div
      id="BannerCarousel"
      className="carousel slide text-white"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators text-white">
        {bannerArtworks.map((banner, index) => (
          <input
            key={`bannerindicator${index}`}
            type="button"
            data-bs-target="#BannerCarousel"
            data-bs-slide-to={index}
            className={index == 0 ? "active" : ""}
            aria-current={index == 0}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {bannerArtworks.map((banner, _index) => {
          banner.active = _index == 0;
          return (
            <BannerItemComponent
              key={`banneritem${_index}`}
              banner={banner}
              onClick={() => {
                setImageIndex(_index);
              }}
            />
          );
        })}
      </div>
      <Lightbox
        slides={bannerArtworks}
        open={imageIndex >= 0}
        index={imageIndex}
        close={() => setImageIndex(-1)}
        captions={{ descriptionTextAlign: "center" }}
        // enable optional lightbox plugins
        plugins={[Captions, Counter, Zoom]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
      <div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#BannerCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#BannerCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

const BannerSection = ({
  bannerArtworks,
}: {
  bannerArtworks: BannerArtwork[];
}) => {
  return (
    <section>
      <BannerCarousel bannerArtworks={bannerArtworks} />
    </section>
  );
};
export default BannerSection;
