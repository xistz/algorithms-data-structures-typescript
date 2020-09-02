/*
maxSubArraySum accepts 2 arguments, an array of numbers and a number, n.
returns the maximum sum of n consecutive numbers in the array.
*/

const maxSubArraySum = (arr: number[], n: number) => {
  let sum: number | undefined;
  let temp = 0;

  if (arr.length === 0) return sum;

  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }
  sum = temp;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    sum = Math.max(temp, sum);
  }

  return sum;
};

export default maxSubArraySum;
