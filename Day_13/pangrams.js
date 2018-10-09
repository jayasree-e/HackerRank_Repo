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

// Complete the pangrams function below.
function pangrams(s) {

    s =s.replace(/\s/g, "").toLowerCase();
    var ascii = 97,count= 0;
    while(ascii >=97 && ascii <= 122) {
        
     for(var i=0 ; i<s.length ; i++) {
         
        if((s.charCodeAt(i)) == ascii ) {

            count++;

            break;
        }

    }
    ascii++;
 }
 
    if(count == 26) {
       return "pangram"
       }
    return "not pangram"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
