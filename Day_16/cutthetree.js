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

var power = Math.pow(10, 9) + 7;
// Complete the shortPalindrome function below.
function shortPalindrome(s) {

    var arr1 = new Array(26).fill(0);
    var arr2 = new Array(26);
    for (var i = 0; i < arr2.length; i++) {
        arr2[i] = new Array(26).fill(0);
    }
    var arr3 = new Array(26).fill(0);
    var result = 0;

    for (var i = 0; i < s.length; i++) {

        var idx = s.charCodeAt(i) - "a".charCodeAt(0);

        //console.log(idx);
        result += arr3[idx];
        result = result % power;
        for (var j = 0; j < 26; j++) {
            arr3[j] += arr2[j][idx];
            arr3[j] = arr3[j] % power;
        }

        for (var j = 0; j < 26; j++) {
            arr2[j][idx] += arr1[j];
            arr2[j][idx] = arr2[j][idx] % power;
        }

        arr1[idx]++;
        arr1[idx] = arr1[idx] % power;
    }


    return result;
}function convertCases(input) {
  var args = input.split(/\r?\n/);
  var arr;
  var casesCount;
  var cases = [];
  var k;
  var matrix;
  var m;
  var n;
  var i;
  var j;
  
  function toInt(input) {
    return parseInt(input, 10);
  }

  function toArray(input) {
    return input.split(' ').map(function(n) { return parseInt(n); });
  }
  
  casesCount = toInt(args[0]);
  args = args.slice(1);
  
  for (j = 0; j < casesCount; j++) {
    arr = toArray(args[0]);
    m = arr[0];
    n = arr[1];
    args = args.slice(1);

    matrix = [];
    for (i = 0; i < m; i++) {
      matrix.push(args[i].split(''));
    }
    args = args.slice(m);

    k = toInt(args[0]);
    args = args.slice(1);
    
    cases.push({matrix: matrix, k: k});
  }
  
  cases.forEach(function(_case) {
    for(i = 0; i < _case.matrix.length; i++) {
      for(j = 0; j < _case.matrix[0].length; j++) {
        if (_case.matrix[i][j] === 'M') {
          _case.start = {i: i, j: j};
        }

        if (_case.matrix[i][j] === '*') {
          _case.finish = {i: i, j: j};
        }
      }
    }
  });
  
  return cases;
}

function run(matrix, start, finish, k) {
  var maxI = matrix.length - 1;
  var maxJ = matrix[0].length - 1;
  var directions = [];
  var i;
  
  if (start.i === finish.i && start.j === finish.j) {
    return k;
  }
  
  // Go up
  if (start.i > 0 && matrix[start.i - 1][start.j] !== 'X') {
    directions.push({i: start.i - 1, j: start.j});
  }
  // Go left
  if (start.j < maxJ && matrix[start.i][start.j + 1] !== 'X') {
    directions.push({i: start.i, j: start.j + 1});
  }
  // Go down
  if (start.i < maxI && matrix[start.i + 1][start.j] !== 'X') {
    directions.push({i: start.i + 1, j: start.j});
  }
  // Go right
  if (start.j > 0 && matrix[start.i][start.j - 1] !== 'X') {
    directions.push({i: start.i, j: start.j - 1});
  }
  
  if (directions.length > 1) {
    k++;
  }
  
  for (i = 0; i < directions.length; i++) {
    matrix[start.i][start.j] = 'X';
    var res = run(matrix, directions[i], finish, k);
    if (res !== undefined) {
      return res;
    }
    matrix[start.i][start.j] = '.';
  }
}

function solve(_case) {
  var res = run(_case.matrix, _case.start, _case.finish, 0);
  if (res === _case.k) {
    console.log('Impressed');
  } else {
    console.log('Oops!');
  }
}

function processData(input) {
  var cases = convertCases(input);
  cases.forEach(function(_case) {
    solve(_case);
  });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;function processData(input) {
    var lines = input.split('\n');
    var n = lines[0];
    var nodes = lines[1].split(' ').map(function(x){
        return {
            edges:[],
            data:parseFloat(x),
            sum:parseFloat(x),
            children:0,
            contributed:0
        };
    });
    for (var i = 2; i < lines.length; ++i) {
        var ab = lines[i].split(' ').map(function(x){return parseInt(x)-1;})
        nodes[ab[0]].edges.push(ab[1]);
        nodes[ab[1]].edges.push(ab[0]);
    }
    
    var queue = [0];
    while (queue.length) {
        var ptr = queue[queue.length-1];
        var node = nodes[ptr];
        
        if (!node.visited) {
            for (var i = 0; i < node.edges.length; ++i) {
                var childPtr = node.edges[i];
                var child = nodes[childPtr];
                if (child.visited)
                    continue;
                node.children++;
                child.parent = ptr;
                queue.push(childPtr);
            }
        }
        node.visited = true;

        if (node.contributed == node.children) {
            queue.pop();
            if (node.hasOwnProperty('parent')) {
                var parent = nodes[node.parent];
                parent.sum += node.sum;
                parent.contributed++;
            }
        }
    }
    
    var best = nodes[0].sum;
    for (var i = 0; i < nodes.length; ++i) {
        best = Math.min(best, Math.abs(nodes[0].sum-2*nodes[i].sum));
    }
    console.log(best);
  
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