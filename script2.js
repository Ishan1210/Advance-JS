// function sayHello() {
//     let you = prompt('What is your name?');
//    console.log('Hello', you + '!');
// }
// sayHello();

// let varContainingFunction = function() {
//     let varInFunction = "I'm a variable in a function";
//     console.log("hi There!",varInFunction);
// };

// varContainingFunction();

// function tester(para1, para2) {
//     return para1 + " " + para2;
// }
// const test = tester("Hello", "World!");
// console.log(test);


// function add(a, b) {
//     console.log(a+b);
// }
// parseInt(prompt("Enter first number: ", function(a)));
// parseInt(prompt("Enter second number: ", function(b)));
// add(a, b); 


// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers()
// addTwoNumbers(6,6)
// addTwoNumbers(10)
// addTwoNumbers(1,2,3,4)





// SPECIAL FUNCTIONS

// let doingstuff=(x)=>console.log(x);
// doingstuff("hi there!");

// let addTwoNumbers = (a, b) => console.log(a + b);
// addTwoNumbers(5,3);

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(element => console.log(element));



// SPREAD OPERATOR

// let spread=["some", "random", "words"]; 
// let spread2=["more", "random",...spread, "words"];
// let spread2=["more", "random",spread, "words"];
// console.log(spread2);


// function addNumbers(x,y){
//     console.log(x+y);
// } 
// let arr=[1,2];
// addNumbers(...arr);


//REST OPERATOR

// function someFunction(param1 , ...param2){
//     console.log(param1,param2);
// }   
// someFunction("hello", "world", "this", "is", "a", "test");


//RETURNING FUNCTION VALUES


function addTwoNumbers(x,y){
    return x+y; }
let resultArr=[];
for(let i=0; i<10; i++){
    let result=addTwoNumbers(i,2*i);
    resultArr.push(result);}
        
console.log(resultArr);