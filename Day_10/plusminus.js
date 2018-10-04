'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr, n) {
    var positive = 0;
    var negative = 0;
    var zero =0;
for(let i=0; i<n; i++) {
    if(arr[i] > 0) {
       positive++;
       }
    else if(arr[i] < 0 ){
        negative++;
    }
    else {
        zero++;
    }
}
    console.log((positive/n).toPrecision(6));
    console.log((negative/n).toPrecision(6));
    console.log((zero/n).toPrecision(6));

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr, n);
}
