import same from './index';

test('same([1, 2, 3], [4, 1, 9]) should return true', () => {
  expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
});

test('same([1, 2, 3], [1, 2, 3]) should return false', () => {
  expect(same([1, 2, 3], [1, 2, 3])).toBe(false);
});
