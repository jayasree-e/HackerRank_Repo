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
class Stack {
    constructor() 
    { 
        this.items = []; 
    } 
    push(element) 
    { 
         this.items.push(element); 
    } 
    pop() 
    { 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    peek() 
    { 
    
    return this.items[this.items.length - 1]; 
    } 
    isEmpty() 
    { 
    
    return this.items.length == 0; 
    } 
   
    
}
// Complete the isBalanced function below.
function isBalanced(s) {
let stack = new Stack();
    
            for(var i=0; i<s.length; i++) {
                if(!stack.isEmpty()) {
                switch(s.charAt(i)) {
                     case '}' : if (stack.peek() == '{') {
                                stack.pop();
                                break;
                                } 
                                
                     case ']' : if (stack.peek() == '[') {
                                stack.pop();
                                break;
                                } 
                               
                    case ')' : if (stack.peek() == '(') {
                                stack.pop();
                                break;
                                } 
                                
                    default  : stack.push(s.charAt(i));   
                }
                } else {
                    stack.push(s.charAt(i));
                }
            }
            if(stack.isEmpty()) {
                return "YES";
            } else {
                return "NO";
            }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
