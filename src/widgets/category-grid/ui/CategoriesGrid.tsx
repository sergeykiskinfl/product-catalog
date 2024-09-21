import { SimpleGrid } from "@chakra-ui/react";

import useStore from "../../../shared/store";
import { useGetAllCategories } from "../api/useGetAllCategories";
import { CategoryItem } from "../../../entities/category-item";

import type { Category } from "../../../shared/types";

export function CategoriesGrid(): JSX.Element {
  const categories = useStore((state) => state.categories);
  useGetAllCategories();

  return (
    <SimpleGrid ml={14} columns={2} spacing={3}>
      {categories.map((category: Category) => {
        const { id, name, image } = category;

        return <CategoryItem key={id} id={id} name={name} image={image} />;
      })}
    </SimpleGrid>
  );
}
