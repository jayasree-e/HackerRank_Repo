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
   processData(inputString);
});
function readLine() {
    return inputString[currentLine++];
}
function processData(input) {
    //Enter your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    var array = [];
    for(let i = 0; i<n; i++) {
        var query = readLine().split(' ');
        var number = parseInt(query[0], 10);
        if(number == 1) {
            var data = parseInt(query[1], 10);
            array.push(data);
        }
        else if(number == 2) {
             var data = parseInt(query[1], 10);
            array.splice(array.indexOf(data),1);
        }
        else {
            var minimum = Math.min.apply(null,array);
            ws.write(minimum+"\n");
        }
    }
} 