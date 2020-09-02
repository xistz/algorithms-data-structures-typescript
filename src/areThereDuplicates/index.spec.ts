import areThereDuplicates from './index';

describe('areThereDuplicates', () => {
  it('returns false for 1, 2, 3', () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
  });

  it('returns true for 1, 2, 2', () => {
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
  });

  it('returns true for "a", "b", "c", "a"', () => {
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });
});
