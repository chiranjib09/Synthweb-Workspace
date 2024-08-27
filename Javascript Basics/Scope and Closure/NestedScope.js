

let outerVar = "I'm an outer variable";

function outerFunction() {
    let innerVar = "I'm an inner variable";
    
    function innerFunction() {
        console.log(outerVar);
        console.log(innerVar);
    }

    innerFunction();
}

outerFunction();
console.log(innerVar); // Error: innerVar is not defined
