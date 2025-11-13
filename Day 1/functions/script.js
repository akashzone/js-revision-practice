// function myFirst(){
//     console.log("This function prints hello in the console..");
// };

// myFirst();

// function funcWithArguments(name) {
//     console.log(`Hello, Welcome ${name}`);
// }

// funcWithArguments("AkashxDev");  /* While calling we have to send the parameters */ 

// function sum(a,b) {
//     return a+b; //This functions returns value, but that doesn't mean it will print it..
    //TO print we have to use console.log..
// } 
// console.log(sum(6,5));
// console.log(sum(4,5));
// console.log(sum(1,5)); // we can call functions as many times we want..

// function isEven(num) {
//     if (num%2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// console.log(isEven(46));

/* If we write something after return in a function,
it wont get executes. Bcz after return in fucntion nothing matters. */


// function funcScope() {
//     let n = "AkashxDev";
//     console.log(`Hey, how are you ${n}`); 
/* name is accessible only inside the fucntion if we try to access it from outside 
 it throws error called variable not defined. */ 
// }

// funcScope();
// console.log(n); // throws error - variable not defined..



// Function Expression
/* Function expression is also called as nameless fucntion. 
If we declare a function inside a variable we call it as functional expression */
// const sayHello = function() {
//     console.log("Hello!");
// };
// sayHello();



// Higher order functions
/* Higher order functions are functions that takes another 
function arguments and return a function */

// function sayHello(hello,n){
//     for(let i=1;i<=n;i++){
//         hello();
//     }
// }

// let hello = function() {
//     console.log("Hello......");
// }

// sayHello(hello,5);

// EVEN OR ODD USING Higher order functions..

// function funcFactory(request) {
//     if (request == "odd") {
//         return function (n) {
//             if (n % 2 !=0) {
//                 console.log(`It is odd :${n}`);
//             }
//         }
//     }else if(request == "even") {
//         return function (n) {
//             if (n % 2 == 0) {
//                 console.log(`It is even :${n}`);
//             }
//         }
//     }else{
//         console.log("Request Invalid!");
//     }
// }

// let request = "even";
// let result = funcFactory(request);
// result(8);


//Methods !
// Functions that are defined inside the function is called as Methods.
// const calculations = {
//     sum:function(a,b){
//         console.log(a+b);
//     },
//     sub:function(a,b){
//         console.log(a-b);
//     }
// }
// calculations.sum(7,8);
// calculations.sub(5,7);

// this keyword...

// const student = {
//     name:"AkashxDev",
//     age:19,
//     eng:99,
//     math:89,
//     getAvg(){
//         let avg = (this.eng + this.math)/2;
//         console.log(avg);
//     }
// }

// student.getAvg();
// this refers to the student here!!


// Arrow function..
// const func = ()=>{
//     console.log("This is a Arrow-Function!");
// }
// func();

// Arrow function using Cube..
// const cube = (a)=>{
//     return a*a*a;
// }
// console.log(cube(5));



