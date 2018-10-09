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
function print2Smallest(arr) 
    { 
         var first, second, arr_size = arr.length; 
        if (arr_size < 2) 
        { 
           return; 
        } 
  
        first = second = 1000000; 
        for (var i = 0; i < arr_size ; i ++) 
        { 
            if (arr[i] < first) 
            { 
                second = first; 
                first = arr[i]; 
            } 
            else if (arr[i] < second && arr[i] != first) 
                second = arr[i]; 
        } 
        return second;
    } 
// Complete the isValid function below.
function isValid(s) {
    var str="abcdefghijklmnopqrstuvwxyz";
    var arr = str.split('');
    var count=new Array(26);
    for(var i=0;i<26;i++) {
        count[i]=100000;
    }
   
    for(var c in arr) {
        var charcount=0;
        for(var j=0;j<s.length;j++) {
            
            if(s[j]==arr[c]) {
               charcount++;
            }
        }
        if(charcount!=0)
            count[c]=charcount;
    }
    var min=Math.min.apply(null,count);
    var flag=0,flag2=0;
    console.log(count+" "+min);
    for(var i in count) {
        if(count[i]!=100000){
            if((count[i]!=min)) {
                if(count[i]==min+1) {
                    flag++;
                }
                else {
                    flag2=1;
                }
           }
        }
    }
    console.log(flag);
    if((flag<=1)&&(flag2!=1))
        return "YES"
    var flag1=0,flag3=0;
    var value=print2Smallest(count);
   console.log(value);
    for(var i in count) {
        if(count[i]!=100000){
            if((count[i]!=value)) {
                if(count[i]==min) {
                    flag1++;
                }
                else {
                    flag3=1;
                }
                
           }
        }
    }
    console.log(flag1);
   if((flag1<=1)&&(flag3!=1)) {
        return "YES"
    }
    else
        return "NO"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}