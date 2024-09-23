import type { Size, Product } from "../../../shared/types";

export function getCurrentParams(
  currentProduct: Product,
  searchParams: URLSearchParams
): any[] {
  const { name, colors } = currentProduct!;

  const selectedColors = colors.map((color) => color.name);
  const selectedPhotos = ["Спереди", "Спина"];

  const currentColor = searchParams.get("color") ?? colors[0].name;
  const currentColorObj =
    colors.find((color) => color.name === currentColor) ?? colors[0];
  const selectedSizesLabels = currentColorObj["sizes"]
    .map((size) => {
      if (typeof size === "object") {
        return size.label;
      }
    })
    .filter((item) => item !== undefined);

  const currentPhotoVariant = searchParams.get("photo") ?? "Спереди";
  let currentImage;

  if (currentPhotoVariant === "Спереди") {
    currentImage = currentColorObj["images"][0];
  } else {
    currentImage = currentColorObj["images"][1];
  }

  const currentSizeArr = currentColorObj["sizes"] as Size[];
  const currentSizeLabelUrlParam = searchParams.get("size");

  const wantedSizeLabel = currentSizeArr.find(
    (sizeObj) => sizeObj["label"] === currentSizeLabelUrlParam
  )?.label;

  const defaultSizeObj = currentColorObj["sizes"][0] as Size;

  const currentSizeLabel = wantedSizeLabel ?? defaultSizeObj?.["label"];
  const currentPrice = currentColorObj["price"];
  const description = currentColorObj["description"];

  return [
    name,
    selectedColors,
    selectedPhotos,
    selectedSizesLabels,
    currentImage,
    currentSizeLabel,
    currentPrice,
    currentColor,
    description,
  ];
}
