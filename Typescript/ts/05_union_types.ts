// Union types
let userId: string | number;
userId = '12';
userId = 12;

function sellerId(id: string | number) {
    console.log('Seller id is : ', id);
}

// Type narrowing
function printIdFn(id: string | number) {
    if (typeof id === 'string') {
        console.log('Id is a string: ', id.toUpperCase());
    } else {
        console.log('Id is a number: ', id);
    }
}
