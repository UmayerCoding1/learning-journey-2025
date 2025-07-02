// literal type
type OrderStatus = 'deliverd' | "pending" | "canceled";


let order : OrderStatus = "pending";

let answer : 'yes' | 'no';

answer = 'no';

// number literal
let count : 0 | 1| 3;
count = 3

// boolean  literan
let isVisibal : true | false;
isVisibal = true;


// mix literan
type LiteralType = "Hello" | 2 | "hi" | {name: string, age: number};

type Action = 'add' | "update" | "delete";

function takeAction (action: Action){
    switch(action) {
     case 'add' :
        console.log('add function');
        break;

    case 'update': 
        console.log('Update function'); 
        break;
    
    case 'delete': 
         console.log('Delete function');
         break;
    default:
        console.log('None');
        break;
         
    
    }
}

function printStatus (status: 'success' | 'error' | 'loading'){
    console.log(`Current status is:  ${status}`);
}

printStatus("success");
// printStatus('inactive') // send error


interface ButtonConfig {
    size: 'small' | 'medium' | 'large',
    color: "red" | "green" | 'yellow'
}

const btn1: ButtonConfig = {
    size: "small",
    color:  'red'
}