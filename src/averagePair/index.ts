/*
accepts an array and a target average
return true if there is a pair of values when averaged equals the target
*/

const averagePair = (arr: number[], average: number) => {
  let left = 0;
  let right = arr.length - 1;
  const target = average * 2;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

export default averagePair;
