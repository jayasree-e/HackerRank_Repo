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
 * Complete the waiter function below.
 */
function primeNumbers(n,prime) {
    var k = 2;
    
    while(prime.length < n) {
         
        var count = 0;
        
        for(let j = 2; j < k; j++) {
            
            if(k % j == 0){
                count++;
            }
        }
        
        if(count==0){
            prime.push(k);
        }
        k++;
    }
    
    return prime;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().split(' ');

    var n = parseInt(nq[0], 10);

    var q = parseInt(nq[1], 10);

    var arr = readLine().split(' ').map(numberTemp => parseInt(numberTemp, 10));

    var prime = new Array();
    
    prime = primeNumbers(q,prime);
    
    for(var i = 0; i < q; i++) {
        var a = new  Array();
        var b = new  Array();
        var k = prime[i];
        
        for(var j = arr.length-1; j >= 0; j--) {
            if(arr[j] % k == 0)
                b.push(arr[j]);
            else
                a.push(arr[j]);
        }
         for(var j = b.length-1; j >= 0; j--){
               ws.write(b[j]+"\n");
           }
        
        arr = a;
        
        if(i == q-1) {
           for(var j = a.length-1; j >= 0; j--){
               ws.write(a[j]+"\n");
           }
        }
            
    }

    ws.end();
}
