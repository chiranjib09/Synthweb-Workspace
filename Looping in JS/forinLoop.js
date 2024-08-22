const arr = [1, 2, 3];
arr.customProperty = "custom";

for (let index in arr) {
  console.log(index);
}


//The for...in loop is used to iterate over the properties of an object.
//'s a convenient way to access and process the key-value pairs within an object.
