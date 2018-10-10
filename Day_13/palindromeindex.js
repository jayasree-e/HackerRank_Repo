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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {


    var arr = s.split('');
        var j = arr.length-1;
    var index = -1;
    for(var i = 0; i < arr.length/2; ) {
        if(arr[i] != arr[j]) {
            if((arr[i] == arr[j-1]) && (arr[i+1] == arr[j-2])) {
                index = j;
                break;
            }
            else if((arr[i+1] == arr[j]) && (arr[i+2] == arr[j-1])) {
                index = i;
                break;
            }
            
        }
        
        j--;
        i++;
    }
    return index;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
