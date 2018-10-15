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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    
    var map = new Map();

   
    var totalCount = 0;

   
    for(var i = 0 ; i < s.length; i++)
    {
        for(var j=i+1 ; j <= s.length; j++)
        {
            var currentSubString = s.substring(i,j);

            
            var chars=currentSubString.split("");
           chars.sort();
            currentSubString = chars.toString();

           
            if(map.get(currentSubString)!=null) 
            {
                
                var value = map.get(currentSubString);
                totalCount=totalCount+value;

               
                map.set(currentSubString, value+1);
            } 
            else 
            {
               
                map.set(currentSubString, 1);
            }
        }
    }
    return totalCount;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}