'use strict';
const fs = require('fs');
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {

    if(p == 1) {
       ws.write(1+" ");
       }
    var flag = 0;
    for(var i = p; i <=q; i++ ) {
        var square = i * i;
        var str = square.toString();
       
        var left = str.substr(0, (str.length)/2);
       
        var right = str.substr((str.length)/2);
        var numberLeft = parseInt(left);
        var numberRight = parseInt(right);
        if(numberLeft + numberRight == i) {
           ws.write(i+" ");
            flag = 1;
           }
        
    }
    if(flag == 0) {
       ws.write("INVALID RANGE");
       }
   
}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
