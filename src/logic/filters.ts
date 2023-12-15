import { FilterState } from '~/logic/slices/filters';
import type { Product } from '~/logic/slices/products';
import { roundDownToNearest, roundUpToNearest } from '~/logic/utils';

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
  // use lowercase to make tags case insensitive
  const lcSearch = search.map((s) => s.toLowerCase());
  return tags.filter((tag) => lcSearch.includes(tag.toLowerCase())).length > 0;
};

// search for prices +-5 of given search number
export const applyPriceFilter = ({ price }: Product, search: number) =>
  search <= roundUpToNearest(price, 5) &&
  search >= roundDownToNearest(price, 5);

export const applySubscriptionFilter = (
  { subscription }: Product,
  search: boolean
) => subscription === search;

export const applyFilter = (products: Product[], filters: FilterState) =>
  products.filter(
    (product) =>
      (filters.search ? applySearchFilter(product, filters.search) : true) &&
      (filters.tags.length > 0
        ? applyTagFilter(product, filters.tags)
        : true) &&
      (filters.price && filters.price !== -1
        ? applyPriceFilter(product, filters.price)
        : true) &&
      (filters.subscription !== null
        ? applySubscriptionFilter(product, filters.subscription)
        : true)
  );
