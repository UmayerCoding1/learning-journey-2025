let a1: number = 1;
a1 = 10;

const y = add1(3, a1);
console.log(y);

function add1(a: number, b: number): number {
    return a + b;
}
