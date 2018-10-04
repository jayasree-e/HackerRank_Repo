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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var arr = s.split(':');
    var str = '';
    var hour = parseInt(arr[0], 10);
    var min = parseInt(arr[1], 10);
    var sec = parseInt(arr[2], 10);
    if(arr[2].endsWith("PM"))
    {
        if(hour < 12)
            hour = hour + 12;
        var res = str.concat(hour+":");
        str = res;
        var res = str.concat(arr[1]+":");
        str = res;
        var res = str.concat(sec);
        str = res;
    }
    else {
        if(hour >= 12)
            hour = hour-12;
        if(hour < 10)
            hour = '0'+hour;
        var res = str.concat(hour+":");
        str = res;
        var res = str.concat(arr[1]+":");
        str = res;
        if(sec < 10)
            sec = '0'+sec;
        var res = str.concat(sec);
        str = res;
    }
    console.log(str);
    return str;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}