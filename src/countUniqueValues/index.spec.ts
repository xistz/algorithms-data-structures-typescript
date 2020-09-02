import countUniqueValues from './index';

describe('countUniqueValues', () => {
  it('returns 2 for [1, 1, 1, 2]', () => {
    expect(countUniqueValues([1, 1, 1, 2])).toBe(2);
  });

  it('returns 7 for [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]', () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });

  it('returns 0 for []', () => {
    expect(countUniqueValues([])).toBe(0);
  });

  it('returns 4 for [-2, -1, -1, 0, 1]', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});
