//Create a function that rotates the elements of an array to the right by a specified number of positions. For example, rotating [1, 2, 3, 4] by 2 positions would result in [3, 4, 1, 2].


function rotateArray(arr, positions) {
  const len = arr.length;
  const normalizedPositions = positions % len;
  if (normalizedPositions === 0) {
      return arr;
  }
  const rotatedPart = arr.slice(-normalizedPositions);
  const remainingPart = arr.slice(0, len - normalizedPositions);

  return rotatedPart.concat(remainingPart);
}
const numbers = [1, 2, 3, 4];
const rotatedArray = rotateArray(numbers, 2);
console.log(rotatedArray);
