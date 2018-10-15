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

// Complete the steadyGene function below.
function steadyGene(s) {
    
     var n = s.length;
    var counter = {"A" : 0,
                   "T" : 0,
                   "C" : 0,
                   "G" : 0};
    
    for (var i = 0; ((i < n) && (counter[s[i]] < (n/4))); i++) {
        counter[s[i]]++;
    }
    i--;
    
    var j = n;
    var minSubstring = j - i;
                
    
    while ((i >= -1) && (minSubstring > 0)) {           
        j--;
        for (; counter[s[j]] < (n/4); j--) {
            counter[s[j]]++;
        }
        if (minSubstring > (j - i)) {
            minSubstring = j - i;
        }      
        
               
        for (; ((i >= 0) && (s[i] != s[j])); i--) {
            counter[s[i]]--;
        }
        i--;
    }
    
                    
     return minSubstring;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const gene = readLine();

    let result = steadyGene(gene);

    ws.write(result + "\n");

    ws.end();
}