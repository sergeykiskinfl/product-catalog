// type Label = "XS" | "S" | "M" | "L" | "XL";
// type SizeNumber = 44 | 46 | 48 | 50 | 52;
// type ColorName = "черный" | "белый" | "серый" | "желтый" | "синий";

type ProductShort = {
  id: number;
  name: string;
};

export type Size = {
  id: number;
  label: string;
  number: number;
};

export type Color = {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: Size[] | number[];
};

export type Category = ProductShort & {
  image: string;
};

export type Product = ProductShort & {
  colors: Color[];
};

export type ProductInCart = {
  id: string;
  category: string;
  color: string;
  size: string;
  price: string;
}

export type ZustandState = {
  sizesLabels: string[];
  categories: Category[];
  currentProduct: Product | null;
  productsInCart: ProductInCart[];
};

export type ZustandActions = {
  setCategories: (categories: ZustandState["categories"]) => void;
  setCurrentProduct: (currentProduct: Product) => void;
  setSizesLabels: (sizesLabels: ZustandState["sizesLabels"]) => void;
  setProductsInCart: (products: ProductInCart[]) => void;
};
