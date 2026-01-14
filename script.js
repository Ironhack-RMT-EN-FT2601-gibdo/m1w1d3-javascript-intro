console.log("Hello world from a script file!");

// comments

/* 
multiline
comment
*/

console.log("other log!");
console.log("other log!");
console.log("other log!");
console.log("other log!");

//* color 1
//? color 2
//! color 3
//todo color 4



//* Variables

// variable declaration
let myHobby;

console.log(myHobby)

// variable initialization
myHobby = "Climbing"

console.log(myHobby)

myHobby = "Playing Videogames"

console.log(myHobby)

// variable declaration and intialization
let otherHobby = "Going to Festivals"

console.log(otherHobby)

let yetAnotherHobby = myHobby;

console.log(yetAnotherHobby)

yetAnotherHobby = undefined

console.log(myHobby)

// naming variables

// let 1fruit
// let class
// let myfavouriteplaceintheworld;
let myFavouritePlaceInTheWorld;

// let and const

let myAge = 30;
console.log(myAge)

myAge = 31;
console.log(myAge)

const myName = "Jorge"
console.log(myName)

// myName = "Bob"



// Types of data (typeof)

let variable1 = "Potato"
console.log(typeof variable1)

let variable2 = true
console.log(typeof variable2)

let variable3 = 41
console.log(typeof variable3)

let variable4 = ["hello", "good bye"] 
console.log(typeof variable4) // same as objects

let variable5 = {age: 36}
console.log(typeof variable5)

let variable6 = undefined;
console.log(typeof variable6)

let variable7 = null;
console.log(typeof variable7) // should be null, it's own data type


//* Strings

let fruit1 = "tomatoes"
let fruit2 = "apples"
let fruit3 = "bananas"

// concatenation
let recipe = "The recipe has: " + fruit1 + ", " + fruit2 + " and, " +fruit3

console.log(recipe)

// String Interpolation
let betterRecipe = `The recipe has: ${fruit1}, ${fruit2} and ${fruit3}`
console.log(betterRecipe)

// index and some properties

let simpleWord = "helkhwgfewjhfvwjbvefjbvwefnbvwefnbevwlo"
//                |||||
//                01234

// bracket notation
console.log(simpleWord[0])

console.log(simpleWord.length) // 5

console.log(simpleWord[ simpleWord.length - 1 ])


// string methods (action we can do on strings)

console.log( simpleWord.indexOf("f") )
console.log( simpleWord.indexOf("x") ) // -1 means it did not find it
console.log( simpleWord.indexOf("lo") )


console.log( simpleWord.slice( 14, 20 ) )
console.log( simpleWord.slice( 0, 4 ) )
console.log( simpleWord.slice( 20 ) )


//* Numbers

let posNum = 82734;
let negNum = -734268;
let floatNum = 0.53976;

let infinite = Infinity;


let num1 = 6;
let num2 = 2;

console.log(num1 + num2) // 8
console.log(num1 - num2) // 4
console.log(num1 * num2) // 12
console.log(num1 / num2) // 3
console.log(num1 ** num2) // 36

// modulus
console.log(num1 % num2) // 0 (the second one is perfectly divisible by the first one)

console.log(25 % 4) // 1. (4 + 4 + 4 + 4 + 4 + 4) = 24

// we can define if a number is even or odd

//* assignment and math operators

let age = 23;
age = age + 1;

console.log(age)

age += 1
console.log(age)

age++
console.log(age)


//* coercion (js tries to convert data types internally to process the request)

console.log(3 + 8)
console.log("3" + "8")

console.log("7" - "4") // 3

console.log("Javascript" - "script") // NaN Not a Number

console.log(typeof NaN)


console.log(3 + "5") // "35"


// Math built in objects

console.log(Math)

let randomNumber = Math.random() // 0 - 0.99999
console.log(randomNumber)

console.log( Math.max(4, 40, 20, 300) )

console.log(Math.floor(4.68))


//* Booleans

let someBool = false

// not operator (!)

console.log(someBool)
console.log(!someBool)


// strict comparisson operators (===) or (!==) (checks data types)

let food1 = "burger"
let food2 = "pizza"
let food3 = "burger"

console.log(food1 === food2) // false
console.log(food1 === food3) // true
console.log(food1 !== food3) // false

let someNum1 = 40;
let someNum2 = 50;

console.log(someNum1 >= someNum2) // false

console.log("a" > "T")

console.log("5" === "5") // true

console.log(5 === "5") // false

// try to avoid this one
console.log(5 == "5") // true

// logical operators && and ||

console.log( "apples" === "apples" && "pears" === "grapes")
//                    true         &&         false

// it will only be true if ALL are true
// if at least one is false, then it is false

console.log( "apples" === "apples" || "pears" === "grapes")
//                    true         ||         false

// it will only be false if ALL are false
// if at least one is true, then it is true


console.log("a" > 3) // false

console.log("***** ACTIVITY ******")
//* Activity

// Guess the console input for each console.log

// Part 1.

console.log(true && false && true); // false
console.log((11 % 3) === 2); // true
console.log(false || !false); // true
console.log(false || (false && true)); // false
console.log(17 == '17'); // true
console.log((100 + 23) === '123'); // false
console.log('Hello' - 'llo'); // NaN

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I")) // -1

let subStatement = statement.slice(7);
console.log(subStatement);

console.log(subStatement[0].toUpperCase())

subStatement.toUpperCase(); // JAVASCRIPT!
console.log(subStatement); 

// JAVASCRIPT
// JAVASCRIPT!
// error


//* Conditionals

/* 

if (condition) {
  what happens if the condition is true
} 

*/

let oranges = 0;

if (oranges === 0) {
  console.log("You are out of oranges")
} else if (oranges > 0 && oranges < 4) {
  console.log("you have enough oranges for one glass of juice")
} else if (oranges >= 4) {
  console.log("you have enough oranges to make juice for a lot of people!!!")
} else if (oranges === 0) {
  console.log("also print this") // this will never print due to the first condition
}


// truthy and falsy
// these are values that represent either true or false when coerced.

if (0 || "" || false || undefined || null || NaN) {
  console.log("will this print?")
}

let username = null;

if (!username) {
  console.log("Hello stranger! please identify yourself")
} else {
  console.log(`Welcome ${username}, glad you are here!`)
}


//* Loops


/* 

for ( controlVariable; conditionForWhenToContinue; finalExpression ) {
  code to execute X many times
}

*/


// for ( let potato = 0; potato < 20; potato = potato + 1 ) {
//   // let potato = 0 (only once at the start)

//   // if (potato < 20) continue with the loop

//   console.log(potato)

//   // potato = potato + 1
// }


for (let i = 20; i < 50; i += 2) {
  console.log("cooking some pie", i)
}
