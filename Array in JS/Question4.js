//Write a function getMiddleElement(arr) that returns the middle element of an array. If the array has an even number of elements, return the element just before the middle in javascript

function getMiddleElement(arr) {
  if (arr.length === 0) {
      return null;
  }

  let middleIndex = Math.floor((arr.length - 1) / 2);

  return arr[middleIndex];
}

let array1 = [10, 20, 30, 40, 50];
console.log(getMiddleElement(array1));

let array2 = [1, 2, 3, 4];
console.log(getMiddleElement(array2));
