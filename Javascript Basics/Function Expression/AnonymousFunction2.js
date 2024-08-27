//Anonymous Function as a CALLBACK

//Anonymous functions are often used as callbacks, especially with array methods like map, filter, and forEach.
//They are useful when you need to perform a simple operation and don't want to declare a named

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);
