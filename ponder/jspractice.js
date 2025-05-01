//

const PI = 3.14;
let radius = 3;


let area = radius * radius * PI;

console.log(area);


radius = 20;


area = radius * radius * PI;


console.log(area);



const one = 1;
const two = '2';

let result = one * two;

console.log(result);


result = one + Number(two);
console.log(result);



// scope

let global = "I am global";


function exampleFunction() {
    let block = "I am a block level or local";
    console.log(block);
    console.log(global);
}



// console.log(block);
// console.log(global);
exampleFunction();