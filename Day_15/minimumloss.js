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

// Complete the minimumLoss function below.
function minimumLoss(price) {
    var map1=new Map();
    for(var i = 0; i <= price.length-1; i++) {
          map1.set(price[i],i);
        
    }
    price.sort(function(a,b){return a-b});
    let minDiff = Number.POSITIVE_INFINITY
    for (let i = 1; i < price.length; i++){
        var tempDiff = Number(price[i])-Number(price[i-1])
        if (map1.get(price[i])<map1.get(price[i-1]))
            minDiff = tempDiff < minDiff ? tempDiff : minDiff
    }
return(minDiff);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const price = readLine().split(' ').map(priceTemp => parseInt(priceTemp, 10));

    let result = minimumLoss(price);

    ws.write(result + "\n");

    ws.end();
}
