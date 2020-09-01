import anagram from './index';

describe('anagram', () => {
  it('returns true for "" and ""', () => {
    expect(anagram('', '')).toBe(true);
  });

  it('returns true for "test" and "test"', () => {
    expect(anagram('test', 'test')).toBe(true);
  });

  it('returns false for "test" and "anot"', () => {
    expect(anagram('test', 'anot')).toBe(false);
  });

  it('returns false for "aaz" and "zza"', () => {
    expect(anagram('aaz', 'zza')).toBe(false);
  });
});
