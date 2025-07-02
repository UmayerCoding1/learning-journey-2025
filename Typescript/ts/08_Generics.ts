/* 
generics => Generics are a way to create componenta (functions, classes, interfaces)
 that work with different types without losing type safety

*/

// function 
function genericsIdentity<T> (arg: T): T{
    return arg;
}

console.log(genericsIdentity<number>(10));
console.log(genericsIdentity<string>('Hello'));
console.log(genericsIdentity<boolean>(true));


// interface
interface KeyPai<T,U> {
    key: T,
    value:U 
}

const keyPaiValue : KeyPai <string, number> = {
    key: 'pai',
    value: 10
}
const keyPaiValue2 : KeyPai <string, boolean> = {
    key: 'pai',
    value: true
}

// generic constraints
function getLength<T extends {length: number}>(item: T):number{
    return item.length
}

// console.log(getLength('umayer'));
// console.log(getLength([1,3,4,6]));
// console.log(getLength(10)); //error


// generic class

class Box<T> {
  content: T;

  constructor(value: T){
    this.content = value;
  }

  getContent():T {
    return this.content;
  }
}


const numberBox = new Box(100);
const stringBox = new Box('Umayer');

// console.log(numberBox.getContent());
// console.log(stringBox.getContent());


class Stack<T> {
    private items:T[] = [];

    pudh(item:T):void{
        this.items.push(item);
    }

    pop(): T | undefined{
        return this.items.pop()
    }

    getStack():T[] {
        return this.items;
    }
}

const numberStack = new Stack<number>();
numberStack.pudh(10);
numberStack.pudh(20);
// console.log(numberStack.getStack());
numberStack.pop()
numberStack.pop()
// console.log(numberStack.getStack());

