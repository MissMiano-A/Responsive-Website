// ===================================
// Part 1: Variables and Conditionals
// ===================================
let userName = "Ann";    // variable declaration
let userAge = 20;        // variable declaration

if (userAge >= 18) {
    document.getElementById("conditional-output").innerText = userName + " is an adult.";
} else {
    document.getElementById("conditional-output").innerText = userName + " is not an adult.";
}

// ===================================
// Part 2: Custom Functions
// ===================================
function changeGreeting() {
    document.getElementById("greeting").innerText = "Hello " + userName + ", nice to see you!";
}

function checkAge() {
    if (userAge >= 18) {
        alert("You are allowed to vote!");
    } else {
        alert("You are too young to vote!");
    }
}

// ===================================
// Part 3: Loops
// ===================================
// Example 1: For loop
function showNumbers() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    document.getElementById("loop-output").innerText = "Numbers: " + output;
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
    console.log("While loop count: " + counter);
    counter++;
}

// ===================================
// Part 4: DOM Interactions
// ===================================
// 1. Change text content
document.getElementById("btnChangeText").addEventListener("click", changeGreeting);

// 2. Show numbers using loop
document.getElementById("btnShowNumbers").addEventListener("click", showNumbers);

// 3. Check age with alert
document.getElementById("btnCheckAge").addEventListener("click", checkAge);
