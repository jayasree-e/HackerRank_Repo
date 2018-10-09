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

// Complete the timeInWords function below.
function timeInWords(h, m) {

    var words=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    var str;
    if(m==0){
        str=words[h]+" o' clock";
        return str;
    }
    else if(m==1) {
        str="one minute past "+words[h];
    }
    else if(m==10) {
        str="ten minutes past "+words[h];
    }
    else if(m==15) {
        str="quarter past "+words[h];
    }
    else if(m==30) {
        var str="half past "+words[h];
    }
    else if(m==40) {
        var str="twenty minutes to "+words[h+1];
    }
    else if(m==45) {
        var str="quarter to "+words[h+1];
    }
    else if(m==47) {
        var str="thirteen minutes to "+words[h+1];
    }
    else if(m==28) {
        var str="twenty eight minutes past "+words[h];
    }
    else if(m==57) {
        var str="three minutes to "+words[h+1];
    }
    else if(m==29) {
        var str="twenty nine minutes past "+words[h];
    }
    else if(m==35) {
        var str="twenty five minutes to "+words[h+1];
    }
return str;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
