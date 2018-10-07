'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {

    var count = 0;
    for(var range = i; range <= j;range++)
    {
        var number = range;

        var reverse = 0,remainder;
        while(number != 0)
        {
            
            remainder = number % 10;
           
            reverse = reverse * 10 + remainder;
            
            number = Math.floor(number/10);
        }
        
     if((Math.abs(range-reverse)) % k == 0) {
         count++;
     }
    }
 return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}
