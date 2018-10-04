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
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades,n) {
    /*
     * Write your code here.
     */
    for(let i=0;i<n;i++) {
        if(grades[i] >= 38 && grades[i]%5 >= 3) {
            grades[i] = grades[i]+(5-(grades[i]%5));
        } else {
            grades[i]=grades[i];
          }
    }
        
return grades;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades,n);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
