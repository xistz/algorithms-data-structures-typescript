/*
countUniqueValues accepts a sorted array of numbers
returns the number of unique numbers in the array
*/
const countUniqueValues = (arr: number[]) => {
  let current: number | undefined;
  let counter = 0;

  for (const num of arr) {
    if (current !== num || typeof current === 'undefined') {
      current = num;
      counter++;
    }
  }

  return counter;
};

export default countUniqueValues;
