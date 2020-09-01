interface Counter {
  [key: string]: number;
}

const anagram = (a: string, b: string) => {
  if (a.length !== b.length) return false;

  const counterA = count(a);
  const counterB = count(b);

  if (Object.keys(counterA).length !== Object.keys(counterB).length)
    return false;

  for (const key in counterA) {
    if (counterA[key] !== counterB[key]) return false;
  }

  return true;
};

const count = (s: string) => {
  return [...s].reduce((result, char) => {
    if (/[a-zA-Z]/.test(char)) {
      result[char] = (result[char] || 0) + 1;
    }

    return result;
  }, {} as Counter);
};

export default anagram;
