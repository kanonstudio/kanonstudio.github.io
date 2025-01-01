/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction } from "react";
import { ElementRef, MasonryPhotoAlbum, MasonryPhotoAlbumProps, Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Zoom } from "yet-another-react-lightbox/plugins";

type PhotoGalleryProps = {
  photos: Photo[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
} & MasonryPhotoAlbumProps<Photo> & ElementRef;
const PhotoGallery = ({
  photos,
  index,
  setIndex,
  ...props
}: PhotoGalleryProps) => {
  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        {...props}
        onClick={({ index }) => setIndex(index)}
        render={{
          image: (props) => (
            <img src={props.src} alt={props.title} className="w-100 h-auto" />
          ),
        }}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        captions={{ descriptionTextAlign: "center" }}
        // enable optional lightbox plugins
        plugins={[Captions, Counter, Zoom]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        // render={{
        //   slide: ({ slide }: { slide: Slide }) => {
        //     const slideImage: SlideImage = slide as SlideImage;
        //     return (
        //       <div className="d-flex flex-column flex-fill h-100">
        //         <h3 className="text-left">{slide.title}</h3>
        //         <div className="d-flex mx-auto">
        //           <ImageWithPlaceholder
        //             image={slideImage.src}
        //             //thumbnail={slideImage.thumbnail || "/assets/whatsapp.png"}
        //           />
        //         </div>
        //       </div>
        //     );
        //   },
        // }}
      />
    </>
  );
};
export default PhotoGallery;
