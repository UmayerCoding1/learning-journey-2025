// Regular function
function addNumbers (a: number, b: number):number {
    return a + b;
};

// console.log(addNumbers(2, 3));


// function expression
const dicide = function (a: number, b: number): number {
    return a / b;
}

// console.log(dicide(10, 2));

// arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
}

// console.log(multiply(2, 3));


// optional parameters 
const greet = (name?:string) => {
    console.log(name ?  `Hello ${name}` : 'Hello');
}

// greet('John');
// greet();


// default parameters   
const greet2 = (name: string = 'user') => {
    console.log(`Hello ${name}`);
}

// greet2('John');
// greet2();

// function overloading

function getLength (value: string): number;

function getLength (value: any[]): number;
function getLength (value: any): number {
    return value.length;
}

// console.log(getLength('Hello'));

// console.log(getLength([1, 2, 3, 4, 5, "item"]));

// rest parameters

function sum (...numbers: number[]) : number {
    return numbers.reduce((totle, num) => totle + num , 0)
}

// console.log(sum(1, 2, 3, 4, 5, ));

function greetAll (greeting: string, ...names: string[]){
    names.forEach(name => {
        console.log(`${greeting} ${name}`);
    })
}


greetAll('Hello', 'Umayer', 'Rakib', 'Rifat');