class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const new_Person = new Person("Umayer Hossain", 20);
// console.log(new_Person.greet());






/* access modifiers = public, private, protected

public = default, can be accessed from anywhere,
private = Accessible only within the class,
protected = Accessible within the class and its subclasses,
*/

class Car {
  make: string;
  private model: string;
 protected year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

 public getModel() {
    return this.model;
  }
}

const newCar = new Car("Tesla", "Model 10", 2022);
// console.log(newCar.getModel());


// inheritance
class Animal {
    constructor(
        public name: string
    ) {
        this.name = name;
    }

    makeSound(): void {
        return console.log("Some generic sound....");
    }
}


class Dog extends Animal {
    constructor(name: string){
        super(name);
    }

    // makeSound(): void {
    //     (console.log("Woof Woof!"));
    // }
}


const dog = new Dog("Rover");
// dog.makeSound(); 

// abstract class
abstract class Shape {

    abstract getArea(): number; //abstract method

    printArea(): void {
        console.log(`The area of the shape is ${this.getArea()} square units.`);
    }
}


class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}


const rect = new Rectangle(5,10);
// rect.printArea(); 

// seter and getter

class Circle {
    private _radius : number;
    constructor (radius : number){
        this._radius = radius;
    }

    get radius() : number {
        return this._radius;
    }  


    set redius(value: number){
        if (value < 0) {
            throw new Error("Radius cannot be negative");
        }
        this._radius = value;
    }
    

}

const circle = new Circle(5);
console.log(circle.radius); 
circle.redius = 10;
console.log(circle.radius); 

