import maxSubArraySum from './index';

describe('maxSubArraySum', () => {
  it('returns 10 for [1, 2, 5, 2, 8, 1, 5] and 2', () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  });

  it('returns 17 for [1, 2, 5, 2, 8, 1, 5] and 4', () => {
    expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  });

  it('returns 6 for [4, 2, 1, 6] and 1', () => {
    expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6);
  });

  it('returns 13 for [4, 2, 1, 6, 2] and 4', () => {
    expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });

  it('returns undefined for [] and 4', () => {
    expect(maxSubArraySum([], 4)).toBeUndefined();
  });
});
