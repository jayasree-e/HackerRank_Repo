process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        out="";
        for (i =1; i <=n; i++) {
            if (i % (2*k) <=k && i % (2*k)>0)  {
                if (i+k > n) { out = -1;
                    break;                                
                }
                out= ""+ out +String(i+k) + " ";
            }
            else out= "" + out + String(i - k) + " ";
        }
        console.log(out);
    }

}