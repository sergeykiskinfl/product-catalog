import type { Size, Product } from "../../../shared/types";

// Сбор текущих параметров товара
export function getCurrentParams(
  currentProduct: Product,
  searchParams: URLSearchParams
): any[] {
  const { name, colors } = currentProduct!;

  const selectedColors = colors.map((color) => color.name);

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

  const selectedPhotos = currentColorObj["images"].map(
    (_, index) => "Фото " + (index + 1)
  );

  const currentPhotoVariant = searchParams.get("photo")
    ? Number(searchParams.get("photo")?.split(" ")[1]) - 1
    : 0;
  const currentImage = currentColorObj["images"][currentPhotoVariant];
  
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
