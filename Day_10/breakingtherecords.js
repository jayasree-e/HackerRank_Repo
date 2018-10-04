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

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var bestRecord = 0;
    var worstRecord = 0;
    var max = scores[0];
    var min = scores[0]
    var record = [];
    for(let i = 1; i<scores.length; i++) {
        if(scores[i] > max) {
            max = scores[i]
           bestRecord++;
           }
        else if(scores[i] < min) {
            min = scores[i];
           worstRecord++;
           }
    }
    record.push(bestRecord);
    record.push(worstRecord);
return record;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
