let a = 10;
let b = 20;
if (a > b) {
    console.log ("Rätt");
} else {
    console.log("Fel");
}

let z = "apple";
let x = "pear";
if (z === x) {
    console.log ("YES")
} else{
    console.log ("NO")
}

const number = prompt('Skriv in din ålder?')


// Receive two numbers, print which one that was entered is the largest one
const number1 = Number(prompt("First number"));
const number2 = Number(prompt("Second number"));

if (number1 > number2) {
    console.log("Number 1 is bigger than Number 2");
}   else if (number1 < number2) {
    console.log("Number 2 is bigger than Number 1")
}

// Even or odd
let numberEven = 10;

if (numberEven % 2 == 0) {
console.log ("Even");
}

// Karusell

//const number1 = Number(prompt("First number"));
if (height >= 150) {
    console.log("Okay");
}  else {
    console.log ("Tyvärr");
}

 // liseberg2
let small = false;
let medium = false;
let large = true;
let platinum = true;

if (small || medium) {
    console.log ("You cant go")
}
else{
    console.log ("You can go")
}


// BMI Calculator !!
    //prompt for weight and heightM
const weight = Number(prompt("Enter your weight in KG"))
const heightM = Number(prompt("Enter your height in M e.g. M.CM"))

    // calc BMI
let bmi = weight / (heightM * heightM);

console.log("Your BMI is " + bmi.toFixed(1));

if (bmi < 18.5) {
        console.log("You are under nourished")
}  else if (bmi >= 18.5 && bmi <=  25){
        console.log("You have a normal weight")
}   else if (bmi >= 25.1 && bmi <= 29.9) {
        console.log("You are overweight")
}   else if (bmi >= 30) {
        console.log("You are morbidly obese")
}