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

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    arr.sort(function(a,b) {
        return a-b;
    });
     brr.sort(function(a,b) {
        return a-b;
    });
    var missing=[];
    var len=brr.length;
    var i=0, j=0;
    while(len>0) {
        if(brr[i] == arr[j]) {
            i++;
            j++;
        } else {
            missing.push(brr[i]);
            i++;
        }
        len--;
    }
    for(var i=0; i<missing.length;i++) {
        if(missing[i]==missing[i+1]) {
            missing.splice(i,1);
        }
    }
    return missing;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}