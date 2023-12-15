import { FilterState } from '~/logic/slices/filters';
import type { Product } from '~/logic/slices/products';

export const applySearchFilter = (
  { title }: Product,
  search: string
): boolean =>
  search.length > 0
    ? title.toLowerCase().includes(search.toLowerCase())
    : false;

export const applyTagFilter = (
  { tags }: Product,
  search: string[]
): boolean => {
  const lcSearch = search.map((s) => s.toLowerCase());
  return tags.filter((tag) => lcSearch.includes(tag.toLowerCase())).length > 0;
};

export const applyFilter = (products: Product[], filters: FilterState) =>
  products.filter(
    (product) =>
      (filters.search ? applySearchFilter(product, filters.search) : true) &&
      (filters.tags.length > 0 ? applyTagFilter(product, filters.tags) : true)
  );
