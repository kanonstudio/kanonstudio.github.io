import fs from "fs";
import sizeOf from "image-size";

export function readJsonFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export function getImageSize(filePath: string) {
  const { width, height } = sizeOf(filePath);
  return {
    width: width || 0,
    height: height || 0,
  };
}

