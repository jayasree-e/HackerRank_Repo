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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries,m) {
        var arr =new Array(n);
       for(var i=0;i<n;i++)
           arr[i]=0;
        for(var i=0;i<m;i++){
            var x = queries[i][0];
            var y = queries[i][1];
            var value = queries[i][2];
            arr[x-1] = arr[x-1]+value;
            if(y<n){
                arr[y] = arr[y]-value;
            }
        }
           var max = 0;
        var temp=0;
            for(var k=0;k<n;k++){
                temp = temp+arr[k];
                if(temp>max){
                    max=temp;
                }
            }
       
        return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries,m);

    ws.write(result + "\n");

    ws.end();
}
