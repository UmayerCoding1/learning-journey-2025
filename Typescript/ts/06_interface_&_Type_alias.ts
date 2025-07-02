// Interface
interface Person {
    name: string;
    age: number;
    cgpa: number;
    class: string;
}

const student1: Person = {
    name: 'Umayer',
    age: 20,
    cgpa: 6.80,
    class: '12'
};

// Interface for function signature
interface MathOp {
    (a: number, b: number): number;
}

const addTwoNum: MathOp = (x, y) => x + y;
const subtractTwoNum: MathOp = (x, y) => x - y;

// Interface extending another
interface User {
    name: string;
    age: number;
}

interface Customer extends User {
    address: string;
}

const myCustomer: Customer = {
    name: 'Umayer',
    age: 20,
    address: 'Dhaka'
};



// Type Alias

// Type Alias
type Person2 = {
    name: string;
    age: number;
    cgpa: number;
    class: string;
};

const student2: Person2 = {
    name: 'Rakib',
    age: 20,
    cgpa: 6.80,
    class: '12'
};

// Alias for union type
type ID = string | number;
let userId2: ID = '12';
let rollNumber: ID = 101;

// Alias for function
type MathOp1 = (a: number, b: number) => number;

let add: MathOp1 = (a, b) => a + b;

// Literal union type
type Status = 'active' | 'inactive' | 'pending';
const userStatus: Status = 'inactive';



// Intersection types
let config: { server: string; port: number } & { secure: boolean; timeout: number } = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};

// Optional properties
interface User1 {
    name: string;
    phone?: string;
    email: string;
}

let loginUser: User1 = {
    name: 'Umayer',
    email: 'test@gmail.com'
};
