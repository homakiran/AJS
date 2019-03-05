// function function1(){
//     console.log('Im body of first function');
// }
//
// function function2(){
//     console.log('Im body of second function');
// }
// function2(function1());

// Writing above code in ES6 formate (ECMA script 6)

// here x and y are the names of the functions even though it looks like a variable declaration
let x = function () {
    console.log('Im body of first function');
}

let y = function () {
    console.log('Im body of second function');
}
y(x); // function x is input to the function y 