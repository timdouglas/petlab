import {
  roundDownToNearest,
  roundToDecimal,
  roundUpToNearest,
} from '~/logic/utils';

describe('roundUpToNearest', () => {
  it('rounds to the nearest configured factor for integer inputs', () => {
    expect(roundUpToNearest(13, 5)).toBe(15);
    expect(roundUpToNearest(27, 5)).toBe(30);
    expect(roundUpToNearest(32, 10)).toBe(40);
  });

  it('rounds to the nearest configured factor for float inputs', () => {
    expect(roundUpToNearest(13.3, 5)).toBe(15);
    expect(roundUpToNearest(27.8, 5)).toBe(30);
    expect(roundUpToNearest(32.6, 10)).toBe(40);
  });

  it('handles values already divisible by the configured factor for float inputs', () => {
    expect(roundUpToNearest(20.0, 5)).toBe(20);
    expect(roundUpToNearest(55.0, 5)).toBe(55);
    expect(roundUpToNearest(40.0, 10)).toBe(40);
  });

  it('handles zero inputs', () => {
    expect(roundUpToNearest(0, 1)).toBe(0);
    expect(roundUpToNearest(0.0, 5)).toBe(0);
  });
});

describe('roundDownToNearest', () => {
  it('rounds to the nearest configured factor for integer inputs', () => {
    expect(roundDownToNearest(13, 5)).toBe(10);
    expect(roundDownToNearest(27, 5)).toBe(25);
    expect(roundDownToNearest(32, 10)).toBe(30);
  });

  it('rounds to the nearest configured factor for float inputs', () => {
    expect(roundDownToNearest(13.3, 5)).toBe(10);
    expect(roundDownToNearest(27.8, 5)).toBe(25);
    expect(roundDownToNearest(32.6, 10)).toBe(30);
  });

  it('handles values already divisible by the configured factor for float inputs', () => {
    expect(roundDownToNearest(20.0, 5)).toBe(20);
    expect(roundDownToNearest(55.0, 5)).toBe(55);
    expect(roundDownToNearest(40.0, 10)).toBe(40);
  });

  it('handles zero inputs', () => {
    expect(roundDownToNearest(0, 1)).toBe(0);
    expect(roundDownToNearest(0.0, 5)).toBe(0);
  });
});

describe('roundToDecimal', () => {
  test('rounds to the specified decimal points for positive float inputs', () => {
    expect(roundToDecimal(13.345, 2)).toBe(13.35);
    expect(roundToDecimal(27.891, 1)).toBe(27.9);
    expect(roundToDecimal(32.678, 0)).toBe(33);
  });

  test('handles zero for float inputs', () => {
    expect(roundToDecimal(0.0, 3)).toBe(0);
  });

  test('handles values with multiple decimal points for float inputs', () => {
    expect(roundToDecimal(123.456789, 4)).toBe(123.4568);
  });
});
