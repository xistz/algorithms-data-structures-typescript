import isSubsequence from './index';

describe('isSubsequence', () => {
  it('returns true for "hello" and "hello world"', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
  });

  it('returns true for "sing" and "sting"', () => {
    expect(isSubsequence('sing', 'sting')).toBe(true);
  });

  it('returns true for "abc" and "abracadabra"', () => {
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
  });

  it('returns false for "abc" and "acb"', () => {
    expect(isSubsequence('abc', 'acb')).toBe(false);
  });
});
