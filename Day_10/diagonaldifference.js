'use strict';

const fs = require('fs');

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

// Complete the diagonalDifference function below.
function diagonalDifference(arr, n) {
    var sumPrimary = 0;
    var sumSecondary =0
 for(let i = 0; i < n; i++){
       for(let j = 0; j < n; j++){
          if(i==j)
              {
              sumPrimary = sumPrimary + arr[i][j];
              }
          if(j == n-1-i)
              {
              sumSecondary = sumSecondary + arr[i][j];
          }
           
       }
    }
 return Math.abs(sumPrimary - sumSecondary);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr, n);

    ws.write(result + '\n');

    ws.end();
}
