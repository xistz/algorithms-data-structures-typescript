/*
accepts an array of numbers and a target sum
return the len of the shortest subarray that whoose sum is greater than target
*/

const minSubArrayLen = (arr: number[], target: number) => {
  let sum = 0;
  let left = 0;
  let right = 0;
  let minimumLength: number | undefined;

  while (left < arr.length) {
    if (sum < target && right < arr.length) {
      sum += arr[right];
      right++;
    } else if (sum >= target) {
      const currentMinimumLength = right - left;
      typeof minimumLength === 'undefined'
        ? (minimumLength = currentMinimumLength)
        : (minimumLength = Math.min(minimumLength, currentMinimumLength));
      sum -= arr[left];
      left++;
    } else {
      break;
    }
  }

  if (!minimumLength) return 0;
  return minimumLength;
};

export default minSubArrayLen;
