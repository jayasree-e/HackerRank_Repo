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


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }
        var a=new Array(n);
        var b=new Array(n);
        for( var i=0;i<n;i++) {
            a[i]=0;
            b[i]=0;
        }
        for(var i=0; i<n; i++)
        {
            for(var j=0; j<n; j++)
            {
                var x = container[i][j];
                
                a[i]+= x;
                b[j]+= x;
            }
        }
        var result = "Possible";
       
        for(var i=0; i<n; i++)
        {
            var j = 0;
            for(j = i; j < n; j++)
            {
                if(a[i] == b[j])
                {
                    var temp = b[j];
                    b[j] = b[i];
                    b[i] = temp;
                    break;
                }
            }
            if(j == n)
            {
                result = "Impossible";
                break;
            }
        }
        ws.write(result + "\n");
    }

    ws.end();
}
