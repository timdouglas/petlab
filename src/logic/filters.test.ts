import {
  applyPriceFilter,
  applySearchFilter,
  applySubscriptionFilter,
  applyTagFilter,
} from '~/logic/filters';
import { Product } from '~/logic/slices/products';

describe('filters', () => {
  const products: Product[] = [
    {
      title: 'dog food',
      id: 1,
      slug: '1',
      vendor: '1',
      tags: ['dog', 'food'],
      published: true,
      url: '1',
      image_src: '1',
      option_value: '1',
      sku: '1',
      price: 1,
      subscription: true,
      subscription_discount: 0,
    },
    {
      title: 'cat food',
      id: 2,
      slug: '2',
      vendor: '2',
      tags: ['cat', 'food'],
      published: true,
      url: '2',
      image_src: '2',
      option_value: '2',
      sku: '2',
      price: 2,
      subscription: false,
      subscription_discount: 0,
    },
  ];

  describe('applySearchFilter', () => {
    const tests: Array<{ search: string; product: Product; result: boolean }> =
      [
        { search: 'dog', product: products[0], result: true },
        { search: 'cat', product: products[1], result: true },
        { search: 'food', product: products[0], result: true },
        { search: 'FOOD', product: products[0], result: true },
        { search: 'toys', product: products[0], result: false },
        { search: '', product: products[0], result: false },
      ];

    tests.forEach(({ search, product, result }) => {
      it(`searches for ${search}`, () => {
        expect(applySearchFilter(product, search)).toBe(result);
      });
    });
  });

  describe('applyTagFilter', () => {
    const tests: Array<{
      search: string[];
      product: Product;
      result: boolean;
    }> = [
      { search: ['dog'], product: products[0], result: true },
      { search: ['cat'], product: products[1], result: true },
      { search: ['food', 'cat'], product: products[0], result: true },
      { search: ['FOOD', 'cat'], product: products[0], result: true },
      { search: ['toys'], product: products[0], result: false },
      { search: [], product: products[0], result: false },
    ];

    tests.forEach(({ search, product, result }) => {
      it(`searches for [${search.join(',')}]`, () => {
        expect(applyTagFilter(product, search)).toBe(result);
      });
    });
  });

  describe('applyPriceFilter', () => {
    const tests: Array<{ search: number; product: Product; result: boolean }> =
      [
        { search: 1, product: products[0], result: true },
        { search: 2, product: products[1], result: true },
        { search: 3, product: products[0], result: false },
      ];

    tests.forEach(({ search, product, result }) => {
      it(`searches for ${search}`, () => {
        expect(applyPriceFilter(product, search)).toBe(result);
      });
    });
  });

  describe('applySubscriptionFilter', () => {
    const tests: Array<{ search: boolean; product: Product; result: boolean }> =
      [
        { search: true, product: products[0], result: true },
        { search: false, product: products[1], result: true },
        { search: false, product: products[0], result: false },
        { search: true, product: products[1], result: false },
      ];

    tests.forEach(({ search, product, result }) => {
      it(`searches for ${search}`, () => {
        expect(applySubscriptionFilter(product, search)).toBe(result);
      });
    });
  });
});
