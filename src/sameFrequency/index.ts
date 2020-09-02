import same from '../same';

interface Counter {
  [key: string]: number;
}

const sameFrequency = (a: number, b: number) => {
  const aString = a.toString();
  const bString = b.toString();

  if (aString.length !== bString.length) return false;

  const frequency = [...aString].reduce((result, digit) => {
    result[digit] = (result[digit] || 0) + 1;

    return result;
  }, {} as Counter);

  for (const digit of bString) {
    if (!frequency[digit]) return false;

    frequency[digit] -= 1;
  }

  return true;
};

export default sameFrequency;
