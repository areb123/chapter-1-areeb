
 //correct statment
alert("You're learning JavaScript!");

// my choice statment
alert("Hello, MY name is Areeb Ali.");

//                  chapter 2
var myVariableName = "echapter 2";

var myStringVariable;
myStringVariable = "string.";
var teamName = "Areeb jav";

alert(teamName);
var bestMan = "Areeb";
bestMan = "Ali";

/// chapter no 3
var caseQty;
caseQty = 144;
var num = parseInt("9");
var num1, num2, sum;
num1 = 5;
num2 = 7;
sum = num1 + num2;

// chapter n0 12

var variable1 = 10;
var variable2 = 8;

if (variable1 >= variable2) {
    alert("Variable 1 is greater than equal to Variable 2");
} else {
    alert("Variable 1 is less than Variable2");
}
var marks = parseFloat(prompt("Enter your marks:"));

if (isNaN(marks)) {
    alert("Please enter a valid number for marks.");
} else if (marks >= 90 && marks <= 100) {
    alert("Your percentage is " + marks + "%.\nGrade: A");
} else if (marks >= 80 && marks < 90) {
    alert("Your percentage is " + marks + "%.\nGrade: B");
} else if (marks >= 70 && marks < 80) {
    alert("Your percentage is " + marks + "%.\nGrade: C");
} else if (marks >= 60 && marks < 70) {
    alert("Your percentage is " + marks + "%.\nGrade: D");
} else if (marks < 60) {
    alert("Your percentage is " + marks + "%.\nGrade: F");
} else {
    alert("Invalid input for marks. Please enter a number between 0 and 100.");
}




/////chapter mo 13


if (a === b && c === d) {
    // Rest of the code ifboth conditions are true
}
if (a === b || c !== d) {
    // rest the code if either both conditions are true
}
if ((name === "Hamza" || name === "Areeb") && age < 60) {
    //  if both conditions are true
}
var variable1 = 5;
var variable2 = 10;

if (variable1 < variable2 || variable1 > variable2) {
    alert("first variable is less than and greater than second variable.");
}
//
var firstName = "YourFirstName";
var lastName = "YourLastName";

var userInputFirstName = prompt("Ente first name:");
var userInputLastName = prompt("Ente last name:");
//

if (userInputFirstName === firstName && userInputLastName === lastName) {
    alert("Your first and last names match!");
} else {
    alert("first and last names do not match.");
}




////chapter 14

var password = "example123";

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must greatr than 5.");
    } else {
        alert("OK bhai");
    }
}
if (a === 1) {
    if (c === "Max") {
        alert("OK vbhai");
    }
}
if (a === 1 && c === "Max") {
    alert("OK");
}

//
var variable1 = 7;
var variable2 = 7;

if (variable1 === variable2) {
    if (variable1 <= variable2) {
        alert("Both conditions true congrats!");
    }
}

//chapoter  15
var emptyArray = [];
var stringArray = ["Hello"];
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); 
//output j

//
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;
alert("The total length of the array is: " + arrayLength); 

//
var myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]); 




//  chapter 20

/// class practice question
// var a = ["A","B","C","D","E"];
// var b = [1,2,3,4,5,6,7,8,9];

var a = ["a", "b", "c", "d", "e"];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var mergedArray = [];

for (var i = 0; i < b.length; i++)
 {
    for (var j = 0; j < a.length; j++) {
        mergedArray.push(b[i] + a[j]);
    }
}

console.log(mergedArray);





