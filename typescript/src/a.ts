// let a : number  = 5;
// console.log(a);


// function greet(name : string, age : number){
//   console.log("Hello, " + name);
// }

// greet("Gagan");


// function sum(a : number, b : number) : number{
//   return a + b;
// }

// console.log(sum(9, 7));


// function isLegal(a : number) : boolean{
//   return a > 18;
// }

// console.log(isLegal(23));


// function delay(fn :() => any , n : number){
//   setTimeout(fn, n * 1000);
// }


// delay(() : void => {
//   console.log("Hello after few seconds");
// }, 7)


// const greet = (name) => console.log("hello " + name);

// greet("Gagan");


// function isLegal (obj : User){
//   console.log( obj.age > 18);
// }

// interface User{
//   firstName : string;
//   lastName : string;
//   email? : string  // ? means this is optional
//   age : number;
// }

// isLegal({
//   firstName : "Gagan",
//   lastName : "Bisht",
//   age : 25,
// })


// -------------------------------INTERFACES AND CLASSES-------------------------------
// interface Person{
//   name : string,
//   age? : number,  // ? means this is optional
//   greet (phrase : string) : void;
// }

// class Employee implements Person {
//   name : string;
//   age? : number;

//   constructor(name : string, age : number){
//     this.name = name;
//     this.age = age;
//   }

//   greet(phrase: string){
//       console.log(phrase + " " + this.name);
//   }
// }

// const emp = new Employee("Gagan", 25);
// emp.greet("Hello");
// console.log(emp.name);


// ------------------------------------- TYPES -------------------------------------
// type User = {    // TYPES ME = SIGN USE HOTA HAI
//   firstName: string;
//   lastName: string;
//   email?: string; // ? means this is optional
//   age: number;
// }

// interface UserInterface {
//   firstName: string;
//   lastName: string;
//   email?: string; // ? means this is optional
//   age: number;
// }

// function isLegal(obj: User) {
//   console.log(obj.age > 18);
// }

// isLegal({
//   firstName: "Gagan",
//   lastName: "Bisht",
//   age: 25,
// });


// ------------------------------------- UNION TYPES -------------------------------------
// Union types allow a variable to hold values of multiple types.
// type GreetArg = number | string;

// function greet(arg : GreetArg){

// }
// // OR
// function greet2(arg : string | number){

// }

// greet2(5);
// greet2("Gagan");


// ---------------------------- Intersection Types ----------------------------
// Intersection types allow you to combine multiple types into one.
// type Employee = {
//   name : string;
//   startDate : Date;
// };

// interface Manager {
//   name : string;
//   department : string;
// }

// interface TechLead extends Employee , Manager{
//   // name : string; // This is redundant as it's already in Employee and Manager
//   startDate : Date;
//   department : string;
// }
// type Lead = {
//   name : string;
//   startDate : Date;
//   department : string;
// };

// const tl : TechLead = {
//   name: "Gagan",
//   startDate: new Date(),
//   department: "Engineering"
// };
// const tl2 : Lead = {
//   name: "Gagan",
//   startDate: new Date(),
//   department: "Engineering"
// };


// let arr : number [];
// arr = [1, 2, 3, 4, 5];

// type keyInput = "up" | "down" | "left" | "right";

// enum keyInput {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT,
// };

// enum keyInput {
//   UP = "xyz",
//   DOWN = "down",
//   LEFT = "left",
//   RIGHT = "right",
// };

// enum keyInput {
//   UP = 10,
//   DOWN ,
//   LEFT = 25,
//   RIGHT ,
// };

// function doSomething(key : keyInput){
//   console.log(key);
// }

// // doSomething("up");
// // doSomething("down");
// // doSomething("gagan");           // Error

// doSomething(keyInput.UP);
// doSomething(keyInput.DOWN);


// ------------------------------------- GENERICS -------------------------------------
// type Input = string | number;

// function identity(arg : Input[]){
//   return arg[0];
// }

// function identity(arg : string[] | number[]){
//   return arg[0];
// }

// const value = identity([1, 2, 3]);
// const value2 = identity(["gagan", "bisht"]);
// const value3 = identity([1, 2, 3,"gagan", "bisht"]);
// console.log(identity(["gagan", "bisht"]).toUpperCase());  // Error


function identity<T>(arg : T){
  return arg;
}

let output1 = identity<string>("Gagan");
let output2 = identity<number>(5);




