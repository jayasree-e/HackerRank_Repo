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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the equalStacks function below.
 */
function sum(h) {
    var sum = 0;
    for(let i = 0; i < h.length; i++) {
        sum = sum+h[i];
    }
    return sum;
}
function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
    var sum_h1 = sum(h1);
    
    var sum_h2 = sum(h2);
    
    var sum_h3 = sum(h3);
  
    var p = 0, q = 0, r = 0;
    var max;
    var value = sum_h1;
    while((sum_h1 != sum_h2) || (sum_h1 != sum_h3) || (sum_h2 != sum_h3)){
        
        max = Math.max(sum_h1, sum_h2, sum_h3); 
     
        
        if(max == sum_h1) {
            sum_h1 = sum_h1-h1[p++];
            value = sum_h1;
        }
        else if(max == sum_h2) {
           sum_h2 = sum_h2-h2[q++];
            value = sum_h2;
        }
        else {
             sum_h3 = sum_h3-h3[r++];
            value = sum_h3;
        }
       
         if((sum_h1 == 0) || (sum_h2 == 0) || (sum_h3 == 0))
            break;
    }
    if((sum_h1 == sum_h2) && (sum_h1 == sum_h3))
        return value;
    else
        return 0;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
