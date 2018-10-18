function findBiggestSubstring(string, remainder, min) {
    for (var i=min; i <= remainder.length; i++) {
        if (string.indexOf(remainder.substring(0, i)) == -1) {
            return i - 1;
        }
    }
    return i - 1;
}

// given a string, the cost to add and the cost to copy, determine minimum cost
function calculate(string, costAdd, costCopy) {
    var costPerState = [];
    costPerState[string.length-1] = 0;
    biggestPerState = [];
    var biggest = 0;
    for (var i=0; i < string.length; i++) {
        var substring = string.substring(0, i+1);
        var remainder = string.substring(i+1);
        biggest = findBiggestSubstring(substring, remainder, biggest);        
        biggestPerState[i] = biggest;
    }
    for (var i=string.length-2; i >= 0; i--) {
        var minCost = costAdd + costPerState[i+1];
        for (var j=1; j <= biggestPerState[i]; j++) {
            var cost = costCopy + costPerState[i+j];
            minCost = Math.min(minCost, cost);
        }
        costPerState[i] = minCost;
    }
    return costAdd + costPerState[0];
}

function processData(input) {
    var lines = input.split("\n");
    var cases = lines[0];
    for (var t=0; t < cases; t++) {
        var ints = lines[t*2+1].split(' ');
        var string = lines[t*2+2];
        var result = calculate(string, parseInt(ints[1]), parseInt(ints[2]));
        console.log(result);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";var fs = require('fs');

    
function getc(s, k){
    var t = {};
    var sum = 0;
    var done = false;
    var lastch = '';
    
    function suffArray(s) {
        var sarr =[];
        
        for (var i=0; i< s.length; i++) sarr.push(i);
        
        sarr.sort(function compare(a,b) {
            while(true){
                if (s[a] < s[b]) return -1;
                if (s[a] > s[b]) return 1;
                a++; b++;
                if ((a==b) && (a == s.length-1)) return 0;
                if (a > s.length-1) return -1;
                if (b > s.length-1) return 1;
            }
        });
        return sarr;
    }
    
    function add(s, index){ // add substring starting at i
        var node = t, depth = 0, i = index;
        while (i < s.length){
            if (s[i] in node) {
                node = node[s[i]];
                depth++; i++;
            } else {
                depth++; 
                node[s[i]] = {};
                node = node[s[i]];
                sum += depth;
                if (sum >= k) { // found it
                    done = true;
                    lastch = s[i - sum + k];
                    return true;
                }
                i++;
            }
        }
        return false;
    }
    
    var sa = suffArray(s);
    
    for (var i of sa) {
        if (add(s, i)) break;
    };
    
    return lastch;
    
}

function processData(input) {
    input = input.split('\n');
    var T = Number(input[0]);
    for (var i=0; i < T; i++) {
        console.log(getc(input[i*2+1], Number(input[i*2+2])));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});