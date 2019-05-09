/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New bindind -> This happens when creating a new object using the new keyword which creates an empty object bind to the this keyword in the function constructor and at the end of the same function constructor returns the this keyword, when the new object function gets invoked using the dot notation what is at the left of the dot represents what this reference to.
// Principle 1
// code example for New Binding
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function( ){
        console.log(`Hello my name is ${this.name} and I am ${this.age}, nice to meet you all 👋🏽😁`) 
    }
}
const mark = new Person("Mark", 26);
mark.greeting(); -> This refers to the newly mark object created by using the new keyword on a function constructor

* 2. Window binding -> This happens when the function is invoked without any object being present, in this case the binding of the this keyword refers to the window object. 
// Principle 2
// code example for Window Binding
function foo() {
    console.log(this);
}
foo(); -> This refers to the window object

* 3. Implicit binding -> This happens when the this keyword is used inside the method of an object, which in this case the this keyword points to the object itself in which the method is present.
// Principle 3
// code example for Implicit Binding
mark = {
    name: "Mark",
    age: 17,
    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age}, nice to meet you all 👋🏽😁`)
    }
} -> This refers to the object itself, in this case mark

* 4. Explicit binding -> This happens when the this keyword is binded to a function using one of the 3 function methods which are .call() .apply() .bind() in which their first parameter will represent what the this keyword will reference to.
// Principle 4
// code example for Explicit Binding
const jane = new Person("Jane", 23);
const janeGreet = jane.greet;
janeGreet.call(jane); -> This refers to the jane object that is been assigned between parenthesis after the call method is been applied on the function

*/











