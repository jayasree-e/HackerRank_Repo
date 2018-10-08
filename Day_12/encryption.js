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

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(s) {

    var rows = Math.floor(Math.sqrt(s.length));
    var columns = Math.ceil(Math.sqrt(s.length));
    if(rows * columns < s.length) {
        rows = columns;
       }
    for(var i = 0; i < columns; i++) {
        for(var j = i; j < s.length; j = j+columns) {
            ws.write(s.charAt(j));
        }
        ws.write(" ");
    }
}

function main() {
    

    const s = readLine();
    encryption(s);

    
}
