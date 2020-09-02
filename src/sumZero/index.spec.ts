import sumZero from './index';

describe('sumZero', () => {
  it('returns [-2, 2] for [-4, -3, -2, -1, 0, 1, 2, 5]', () => {
    expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2]);
  });

  it('returns undefined for [-4, -1 , 0, 5, 10]', () => {
    expect(sumZero([-4, -1, 0, 5, 10])).toBeUndefined();
  });
});
