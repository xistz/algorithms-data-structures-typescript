import averagePair from './index';

describe('averagePair', () => {
  it('returns true for [1, 2, 3] and 2.5', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  });

  it('returns true for [1, 3, 3, 5, 6, 7, 10, 12, 19] and 8', () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  });

  it('returns false for [-1, 0, 3, 4, 5, 6] and 4.1', () => {
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  });

  it('returns false for [] and 4', () => {
    expect(averagePair([], 4)).toBe(false);
  });
});
