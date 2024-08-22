//Write a function that finds and returns an array of elements that are common between two arrays of integers.

function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const commonElements = array2.filter(element => set1.has(element));
  return commonElements;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const common = findCommonElements(array1, array2);
console.log(common);
