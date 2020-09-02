interface Counter {
  [key: string]: number;
}

// const areThereDuplicates = (...arr: number[] | string[]) => {
//   if (arr.length < 2) return false;

//   const frequency: Counter = {};

//   for (const element of arr) {
//     if (frequency[element]) return true;

//     frequency[element] = 1;
//   }

//   return false;
// };

const areThereDuplicates = (...arr: number[] | string[]) => {
  return new Set([...arr]).size !== arr.length;
};

export default areThereDuplicates;
