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

// Complete the poisonousPlants function below.
function poisonousPlants(p,n) {
    var flag=0;
    var a=p;
    var count=0;
    while(flag==0) {
         var length=n;
        var temp=length;
        var values=[];
        var j=0;
        for(let i=1;i<n;i++) {
            
            if(a[i]>a[i-1]) {
                
                values.push(i-j);
                j++;
                length--;
            }
        }
     
        for(let j=0;j<values.length;j++) {
            a.splice(values[j],1);
        }
        
         if(length==temp) {
                flag=1;
            }
        count++;
    }
  return count-1;  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p,n);

    ws.write(result + "\n");

    ws.end();
}