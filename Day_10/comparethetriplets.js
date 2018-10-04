'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var counta = 0;
    var countb = 0;
    var countarray = [];
    for(let i=0;i<3;i++) {
        if(a[i] > b[i]){
             counta++;
        } 
         else if(a[i]<b[i]) {
                    countb++;
          }
        
    }
    countarray.push(counta);
    countarray.push(countb);
    return countarray;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

   ws.write(result.join(' ') + '\n');

    ws.end();
}
