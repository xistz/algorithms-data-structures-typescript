interface Counter {
  [key: string]: number;
}

/* 
same checks 2 arrays
returns true if every value in the first array 
has its square in the second array
order does not matter
*/
const same = (a: number[], b: number[]) => {
  if (a.length !== b.length) return false;

  const counterA = a.reduce((result, num) => {
    const squared = num * num;

    result[squared] = (result[squared] || 0) + 1;
    return result;
  }, {} as Counter);

  const counterB = b.reduce((result, num) => {
    const squared = num * num;

    result[squared] = (result[squared] || 0) + 1;
    return result;
  }, {} as Counter);

  for (const key in counterA) {
    const squared = parseInt(key) ** 2;

    if (!(squared in counterB)) return false;

    if (counterB[squared] !== counterA[key]) return false;
  }

  return true;
};

export default same;
