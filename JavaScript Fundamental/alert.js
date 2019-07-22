"use strict";

//Show an Alert
alert("I'm JavaScript");

//Working with variables
const name = "John";

const admin = name;
alert(admin);

//Giving the right name
const ourPlanetName = "Earth";
const currentUserName = "John";

/*
 2.5 Data Types
 String Quotes 
*/
let name = "Ilya";

// the expression is a number 1
alert(`hello ${1}`); // hello 1

// the expression is a string "name"
alert(`hello ${"name"}`); // hello name

// the expression is a variable, embed it
alert(`hello ${name}`); // hello Ilya


/*
 2.6 Type Conversion
 Type Conversion
*/
console.log("" + 1 + 0); //"10"
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //"9px"
console.log("$" + 4 + 5);//"$45"
console.log("4" - 2);//2
console.log("4px" - 2); //Nan
console.log(7 / 0);//Infinity
console.log("  -9  " + 5);//" -9 5"
console.log("  -9  " - 5);//-14
console.log(null + 1);//1
console.log(undefined + 1);//Nan

/*
2.7 Operators
*/
//The postfix and prefix forms
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
console.log(c);
console.log(d);

//Assignment result
a = 2;
let x = 1 + (a *= 2);
//a = 4
//x = 5
console.log(a);
console,log(x);


/*
2.8 Comparisons

Comparisons
*/
console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n");//false
console.log(null === +"\n0\n");//false

/*
2.9. Interaction : alert,prompt,confirm

A simple page
*/
const name = prompt("What is your name?", '');
alert(`Your name is ${name}`);

/*
2.10 Conditional operators: if, '?'

if(a string with zero)
*/
if ("0") {
    alert('Hello');
} //it will run

//The name of JavaScript
const asks = prompt("What is the official name of JavaAscript?",'') === "ECMAScript";
if(asks) {
    console.log("Right");
} else {
    console.log("wrong");
}

//Show the sign
const num = Number(prompt("Enter a number:", ''));
if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}

//Rewrite 'if' into '?'
let a = 1;
let b = 4;
const result = (a+b <4) ? "Below":"Over";

//Rewrite 'if..else' into '?'
let login = prompt("login : ", "");
let message = login === "Employee" ? "Hello" :
    login === "Director" ? "Greetings" :
        login === "" ? "No Login" :
            "";
console.log(message);

/*
2.11 Logical Operators
*/

//What's the result of OR?
alert(null || 2 || undefined);//2

//What's the result of OR'ed alerts?
alert(alert(1) || 2 || alert(3));//1 then 2

//What is the result of AND?
alert(1 && null && 2);//null

//What is the result of AND'ed alerts?
alert(alert(1) && alert(2));
//1 then undefined

//The result of OR AND OR
alert(null || 2 && 3 || 4);//3

//Check the range between
let age = prompt("Enter age: ", "");
if (age >= 14 && age <= 90) console.log("inclusive");

//Check the range outside
age = prompt("Enter age: ", "");
if (!(age >= 14 && age <= 90)) console.log("outside");

if(age <14 || age > 90) console.log("outside");

//A question about "if"
if (-1 || 0) alert('first');//executed
if (-1 && 0) alert('second');//not
if (null || -1 && 1) alert('third');//executed

//Check the login
login = prompt("Enter login: ", "");
if (login === "Admin") {
    let password = prompt("Enter password: ", "");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === null || password === "") {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }

} else if (login === null) {
    alert("Cancelled");

} else {
    alert("I don't know you");
}

/*
2.12 Loops:while and for
*/

//Last Loop Value
let i = 3;

while(i) {
    alert(i--);
}

//Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}

//Replace "for" with "while"
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

//Repeat until the input is correct
let input = "";
do {
    input = prompt("Enter number greater than 100: ", "");
} while (input && input <= 100);
console.log("done");

//Output prime numbers
let n = +prompt("Enter number: ", "");
nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }
    console.log(i);
}


/*
2.13 The swtich statement
*/

//Rewrite the "switch" into an "if"
let browser = "Edge";

if (browser === "Edge") {
    alert("You've got the Edge!");

} else if (browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera") {
    alert("Okay we support these browsers too");
}
else {
    alert("we hope that this page looks ok!");
}

//Rewrite "if" into "switch"
let a = +prompt("a?", "");

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;

}

/*
2.14 Functions
*/

//Is else required?
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
//No difference between both functions above


//Rewrite the function using '?' or '||'
function checkAgeQuestion(age) {
    return (age > 18) ? true : confirm("Do you have your parents permission?");

}

function checkAgeOr(age) {
    return (age > 18) || confirm("Do you have your parents permission?");
}

//Function min(a, b)
function min(a, b) {
    return (a > b) ? b : a;
}

//Function pow(x,n)
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported,
    use an integer greater than 0`);
} else {
    alert(pow(x, n));
}


/*

2.15 Function expressions and arrows
*/

//Rewrite with arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You disagreed")
);




