//What is a value? 
// The most fundamental unit of information in a program is a value. Values are data. They're how the program maintains state. Values come in two forms in JS: primitive and object.

//what is a string? strings are ordered collections of characters, usually used to represent words and sentences.

//is js has interpolation?
let name = "Abdo";
console.log(`hello ${name}`);

//primitives are: strings, numbers, booleans, null, undefined, and symbols.

//null and undefined are both used to represent the absence of a value. null is an assignment value, it can be assigned to a variable as a representation of no value. undefined means a variable has been declared but has not yet been assigned a value.

//arrays are orsdered and indexed list of values. Arrays are a type of object. Arrays can hold any type of value, including other arrays and objects. Arrays are mutable, meaning their contents can be changed after they are created.
//objects are unorderd keyed collections of values. Objects are a type of value that can hold other values in the form of properties. Each property has a key (or name) and a value. Objects are mutable, meaning their contents can be changed after they are created.

//use typeod for value type determeination 
typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof undefined;           // "undefined"
typeof null;                // "object" -- oops, bug!
typeof { "a": 1 };          // "object"
typeof [1,2,3];             // "object"
typeof function hello(){};  // "function"

//to declare a variable, we can use var, let, const, function name and patameters are like var identifiers, catch clause error parameter are block scoped.
// var is intialized with undefined and not has a TDZ, let is intialized with undefined and has a TDZ, const is not initialized and has a TDZ. 
// function declaration vs function expression:
//function declaration:
function awesomeFunction(coolThings) {
    // ..
    return amazingStuff;
}
// in the compile phase, the function is associated with the name awesomeFunction, so it is hoisted to the top of the scope. This means that you can call awesomeFunction() before the function is defined in the code.
//function expression:
const awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
}
//in the execution phase the function is associated with the name awesomeFunction, but the function body is not hoisted. This means that you cannot call awesomeFunction() before the function is defined in the code.


//strictly compaprison === compare values and types, but dose not allow type coercion
//strictly comparison fails with NaN, because NaN is not equal to itself. To check if a value is NaN, you can use the isNaN() function or the Number.isNaN() method,and 0 === -0 it returns true.
//coercev equality == (dont say losse) compares values and types and allow type coercion if theie is type mismatch
// >= < > ...etc do coercion if the types are different
//These relational operators typically use numeric comparisons, except in the case where both values being compared are already strings; in this case, they use alphabetical (dictionary-like) comparison of the strings:
var x = "10";
var y = "9";

x < y;      // true, watch out!

// The wiser approach is not to avoid coercive comparisons, but to embrace and learn their ins and outs.

