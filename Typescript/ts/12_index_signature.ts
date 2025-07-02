// index signature

/* 
An index signature in typescript is used to define types for objects the can have properties of dynamic keys, where the keys are not know in advance but you still want to enforce the type working with objects the act like distionaries or maps. 
*/

interface StringArray {
    [index: number]: string
}

let array1 : StringArray = ['Umayer', "Hossain", "Rakib"];
// console.log(array1[2]);



interface Fruit {
    [key: string]: string
}

const fruitArray: Fruit  ={
    apple: 'A Fruit',
    banana: 'A yellow fruit'
}

console.log(fruitArray['apple']);
