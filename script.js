let a = 500;
let b = 2000;
let z = 50;


// Multiplying (a * z) * b
let total = (a * z) * b;
console.log(`The total of ${a * z} and ${b} is ${total}`);

// Adding Function
function add(a, b, z) {
    return a + b + z;
}
console.log(`The sum of ${a}, ${z} and ${b} is ${add(a, b, z)}`);

// Subtraction Function
function subtract(a, b, z) {
    return a - b - z;
}
console.log(`The rest of ${a} - ${z} - ${b} is ${subtract(a, b, z)}`);

// Another Multiplying Function
function multiply(a, b, z) {
    return a * b * z;
}
console.log(`The total of ${a} * ${z} * ${b} is ${multiply(a, b, z)}`)

// Division Function
function division(a, b, z) {
    return a / b / z;
}
console.log (`The total quotient of ${a} / ${z} / ${b} is ${division(a, b, z)}`)

// Exponent / Power of Function? (ASk TEACHER whats going on here!?)
function power(a, b, z) {
    return a * b ** z;
}
console.log (`The total sum of  ${a} * ${z} and ** ${b} is ${power(a, b, z)}`)




// Declare variables to represent student information such as name, age, grade, and attendance status.
let studentComplete = {name: "Mozzy", age: 25, grade: '+A', attendanceStatus:'True'}; // student object

function studentName(name) {
    console.log("Student " + name);
}
studentName("Mozzy");

function studentGrade(grade) {
    console.log("Student Grade " + grade);
}
studentGrade("+A");

function studentAttendance(attendanceStatus) {
    console.log("Student Present: " + attendanceStatus);
}
studentAttendance("True");

// ask how we would create function if we didn't have the student information yet.


// Math Functions 
let x = 4;
let y = 13;

// Adding
let sum = x + y;
console.log(`sum of ${x}, and ${y} is ${sum}`);

// Subtracting
let difference = x - y;
console.log(`The difference of ${x}, and ${y} is ${difference}`);

// Multiplying 
let product = x * y;
console.log(`The product of ${x} and ${y} is ${product}`);

// Dividing
let quotient = x / y;
console.log(`The quotient of ${x} and ${y} is ${quotient}`)

// Updating X and Y number Function
function updateNumbers(x,  y){
    if (x >= y) {
        console.log(`The updated value of x and y is ${x}, ${y}`);
        return;
    }
    updateNumbers(x, y);
}
updateNumbers(1 + 20, 5 + 10);


// Comparison Operators (!=) to find not equal and equal Function
function compareNumbers(x, y) {
    if (x != y) {
        console.log(`${x} is not equal to ${y}`);
        }
        else {
            console.log(`${x} is equal to ${y}`);
        }
        return;
    }
    compareNumbers(x,  y);
compareNumbers(10, 10);

// Comparison Operators (>=) to find grater than and less than Function
function greaterThan(x, y) {
    if (x >= y) {
        console.log(`${x} is greater than ${y}`);
        }
        else {
            console.log(`${x} is not greater than ${y}`);
        }
        return;
    }
    greaterThan(x,  y);
greaterThan(30, 10);
greaterThan(-11, -1)

let m = 5;
let r = -5;
// Logical operators AND (&&) Function
console.log(m > 0 && r < 0);

// Logical operators OR (||) Function 
console.log(m > 10 || r < -10);