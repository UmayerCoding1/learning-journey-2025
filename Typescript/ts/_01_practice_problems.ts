// 1. write a TypeScript function to calculate the factorial of a number with proper type annotations.

// eg factorial of 4 = 4 * 3 * 2 * 1
function factorial(num: number): number {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// 2. Define a function that accepts a user object with name,age and email and returns a formatted string ;

interface User {
  name: string;
  age: number;
  email: string;
}

function formatUser(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}

// console.log(formatUser({ name: 'John Doe', age: 30, email: 'test@gmail.com' }));

// 3. Calculate totla price: Write a TypeScript function that calculates the total price of an array of product onjects. Each product has a price and quantity.

interface product {
  price: number;
  quantity: number;
}

function calculateTotal(products: product[]): number {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}


let cart: product[] = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
    { price: 20, quantity: 1 },
    { price: 15, quantity: 4 },
    { price: 8, quantity: 2 },
]

// console.log(calculateTotal(cart));

// 4. Define a union for a vehicle that can either be a car or a bike with defferent properties.  Write a function to log vase on the type of vehicale.


type CarData = {
    type: 'car';
    make: string;
    model: string;
    year: number;
}


type BikeData = {
    type: 'bike';
    brand: string;
    cc: number;
}


type vehicale  = CarData | BikeData;

function getVehicaleInfo (vehicale : vehicale){
    if(vehicale.type === 'car'){
        console.log(`Car Make: ${vehicale.make}, Model: ${vehicale.model}, Year: ${vehicale.year}`);
    }

   else if(vehicale.type === 'bike'){
        console.log(`Bike Brand: ${vehicale.brand}, CC: ${vehicale.cc}`);
    }
    else{
        console.log('Invalid vehicale type');
    }
}


let car: CarData = {
    type: 'car',
    make: 'Toyota',
    model: 'Camry',
    year: 2020
}

let bike: BikeData = {
    type: 'bike',
    brand: 'Yamaha',
    cc: 150
}

getVehicaleInfo(car);
// getVehicaleInfo(bike);

