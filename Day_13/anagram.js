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

// Complete the anagram function below.
function anagram(s) {
if(s.length%2!=0) {
        return -1;
    }
    else {
            var s1=s.substr(0,s.length/2);
            var s2=s.substr(s.length/2,s.length);
            var MAX_CHAR = 26; 
            var a1 = new Array(MAX_CHAR); 
            var a2 = new Array(MAX_CHAR); 
            for(var i=0;i<MAX_CHAR;i++){
                a1[i]=0;
                a2[i]=0;
            }
            var length1 = s1.length; 
            var length2 = s2.length; 
            var common=0;
            for(var i = 0 ; i < length1 ; i++) 
               a1[s1.charCodeAt(i) - 97] += 1; 
            for(var i = 0 ; i < length2 ; i++) 
               a2[s2.charCodeAt(i) - 97] += 1; 
           for(var i = 0 ; i < MAX_CHAR ; i++) 
            { 
                if((a1[i] != 0 && a2[i] != 0) )
                { 
                    for (var j = 0 ; j < Math.min(a1[i], a2[i]) ; j++) 
                        common++; 
                } 
            } 
         return s1.length-common;
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
