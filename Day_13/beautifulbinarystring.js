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

// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {

    var count=0;
    for(var i = 0;i <= b.length-2; i++) {
        if((b[i] == '0') && (b[i+1] == '1') && (b[i+2] == '0')) {
            count++;
            if((b[i+3] == '1') && (b[i+4] == '0')) {
                   
                    var str = b.substring(0, i+2) + '1' + b.substring(i + 3);
                b=str;
                
            }
            i=i+1;
        }
    }
return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const b = readLine();

    let result = beautifulBinaryString(b);

    ws.write(result + "\n");

    ws.end();
}
