//It allows you to create functions dynamically at runtime.

const add = new Function('a','b', 'return a+b;');
console.log(add(3,4));