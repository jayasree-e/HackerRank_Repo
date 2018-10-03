const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}
function processData(input) {
    //Enter your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const num_operations=parseInt(readLine(), 10);
    var s = "";
    var array = [];
    for(let i = 0; i<num_operations; i++) {
        var operation = readLine().split(' ');
        if(operation[0] == 1) {
            var word = operation[1];
            array.push(s);
            var str = s.concat(word);
            s = str;
            
        } 
        else if(operation[0] == 2) {
            array.push(s);
            var lastChars = operation[1];
            var resultString = s.substring(0,s.length-lastChars);
            s = resultString;
        }
        else if(operation[0] == 3) {
            ws.write(s.charAt(operation[1]-1) + "\n");
        } 
        else {
            s = array.pop();
        }
        
}
}


