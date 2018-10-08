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

// Complete the 'use strict';

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

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {

    var count = 0;
    for(var i = 0; i < (arr.length - 2); i++ ) {
        for(var j = i+1; j < (arr.length - 1); j++) {
            if(arr[j] - arr[i] == d) {
               for(var k = j+1; k<arr.length; k++) {
                   if(arr[k] - arr[j] == d) {
                      count++;
                      }
               }
               }
        }
    }
   return count; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    ws.write(result + "\n");

    ws.end();
}
function below.
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
