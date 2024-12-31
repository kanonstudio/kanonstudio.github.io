import random from "random";
import { Photo } from "react-photo-album";

const testData = Array.from(Array(8).keys()).map((x) => x + 1);
export const photos: Photo[] = testData.map((data) => {
  const height = random.int(1595, 2279);
  const width = random.int(1595, 2279);
  return {
    src: `https://picsum.photos/${height}/${width}/?seed=000${data}`,
    width,
    height,
    title: "Image Title",
    description: "Image Description"
  };
});

export interface Art {
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  width: number;
  height: number;
  category?: string;
}

export const allImages = (total: number) => {
  const _array = Array.from(Array(total).keys()).map((x) => x + 1);
  const images = _array.map((img): Art => {
    const height = random.int(1595, 2279);
    const width = random.int(1595, 2279);
    return {
      src: `https://picsum.photos/${height}/${width}/?seed=000${img}`,
      thumbnail: `https://picsum.photos/${Math.floor(height/10)}/${Math.floor(width/10)}/?seed=000${img}`,
      title: "Image " + img,
      description: "This is something",
      width,
      height,
      category: random.choice(["Landscape", "Portait","Figure Composition","Copy Work","Close-Up","Sketch",null]) || undefined
    };
  });
  return images;
};
