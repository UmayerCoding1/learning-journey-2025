const fs = require('fs');
const os = require('os');

console.log(os.cpus().length)

// fs.writeFileSync('hello.txt', 'Hello World!');

// const result = fs.readFileSync('hello.txt', 'utf-8');
// console.log(result);

// fs.readFile('hello.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

console.log('read prossec....')

fs.readFile('hello.txt', 'utf-8' , (err,result) => {

    console.log(result);
});


console.log('publich')