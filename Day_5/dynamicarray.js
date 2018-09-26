'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the dynamicArray function below.


function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }
    var slist = new Array(n);
    var lastAnswer = 0;
    for (var i = 0; i < slist.length; i++) {
  slist[i] = new Array();
}
       for(var i=0;i<q;i++){
            var c = queries[i][0];
            var x = queries[i][1];
            var y = queries[i][2];
            var index = (x^lastAnswer)%n;
            if(c == 1){
                slist[index].push(y);
            }
            else if(c == 2){
                var size = slist[index].length;
                var res=y%size;
                lastAnswer = slist[index][res];
                console.log(lastAnswer);
            }
           
        }
    

    
}
