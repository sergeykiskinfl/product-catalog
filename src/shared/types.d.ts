type Label = "XS" | "S" | "M" | "L" | "XL";
type SizeNumber = 44 | 46 | 48 | 50 | 52;
type ColorName = "черный" | "белый" | "серый" | "желтый" | "синий";

type ProductShort = {
  id: number;
  name: string;
};

export type Size = {
  id: number;
  label: Label;
  number: SizeNumber;
};

export type Color = {
  id: number;
  name: ColorName;
  images: string[];
  price: string;
  description: string;
  sizes: Size[];
};

export type Category = ProductShort & {
  image: string;
};

export type Product = ProductShort & {
  colors: Color[];
};

export type ZustandState = {
  categories: Category[];
};

export type ZustandActions = {
  setCategories: (categories: ZustandState["categories"]) => void;
};
