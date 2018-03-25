// write your code below!

var name = "Joe"
var height = 74

console.log("Name:")
console.log(name)

console.log("Height:")
console.log(height+1)



function predictOutput() {
    rl.question('Input X for prediction : ', (answer) => {
        console.log(`At X = ${answer}, y =  ${regressionModel.predict(parseFloat(answer))}`);
        predictOutput();
    });
}

const readline = require('readline'); // For user prompt to allow predictions

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
