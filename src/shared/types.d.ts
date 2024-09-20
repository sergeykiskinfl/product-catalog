type Label = "XS" | "S" | "M" | "L" | "XL";
type SizeNumber = 44 | 46 | 48 | 50 | 52;
type ColorName = "черный" | "белый" | "серый" | "желтый" | "синий";

type Size = {
  id: number;
  label: Label;
  number: SizeNumber;
};

type Color = {
  id: number;
  name: ColorName;
  images: string[];
  price: string;
  description: string;
  sizes: Size[];
};

type Product = {
  id: number;
  name: string;
  colors: Color[];
};

export type ZustandState = {
  products: Product[];
};

export type ZustandActions = {
  setProducts: (products: ZustandState["products"]) => void;
};
