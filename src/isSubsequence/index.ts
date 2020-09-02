/*
accepts two strings
returns true if a sequence of characters in the first string can be found in the second string.
*/

const isSubsequence = (a: string, b: string) => {
  // empty string is subsequence
  if (!a) return true;

  let i = 0;
  let j = 0;

  while (j < b.length) {
    if (a[i] === b[j]) i++;
    if (i === a.length) return true;
    j++;
  }

  return false;
};

export default isSubsequence;
