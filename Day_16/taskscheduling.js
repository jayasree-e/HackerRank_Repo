function processData(input) {
    //Enter your code here
            var cur_line=0;
            input = input.split("\n");
            var n=parseInt(input[cur_line++]);
            for(i=0;i<n;i++)
            {
                var arr=input[cur_line++].split(' ');
                arr = arr.map(Number);
                var nodesCount=[arr[0]];
                var nodesEdges=[];
                var startLine=cur_line;
                for(j=0;j<=arr[0];j++){
                    nodesCount[j]=0;
                    nodesEdges.push([]);
                }
                for(j=0;j<arr[2];j++)
                {
                    var ss=input[cur_line++].split(' ');
                    ss = ss.map(Number);
                    //if(res[ss[0]-1]<arr[1]-1 &&  res[ss[1]-1]<arr[1]-1){
                    nodesCount[ss[0]]+=1;
                    nodesCount[ss[1]]+=1;
                    nodesEdges[ss[0]].push(ss[1]);
                    nodesEdges[ss[1]].push(ss[0]);
                }
                var remove=true;
                while(remove && Math.max.apply(null,nodesCount)>arr[1]){
                    remove=false;
                    for(j=1;j<=arr[0];j++){
                        if(nodesCount[j]==1){
                            var ind=nodesEdges[j][0]
                            for(var lar of nodesEdges[ind]){
                                if(nodesCount[lar]>arr[1]){
                                    nodesCount[ind]-=1;
                                    nodesCount[lar]-=1;
                                    nodesEdges[ind].splice(nodesEdges[ind].indexOf(lar),1);
                                    nodesEdges[lar].splice(nodesEdges[lar].indexOf(ind),1);
                                    remove=true;
                                }
                            }
                        }
                    }
                }
                while(Math.max.apply(null,nodesCount)>arr[1]){
                    var ind=nodesCount.indexOf(Math.max.apply(null,nodesCount));
                    var maxEdg=nodesEdges[ind][0];
                    for(edg of nodesEdges[ind])
                        if(nodesEdges[edg].length>nodesEdges[maxEdg].length)
                            maxEdg=edg;
                    nodesCount[ind]-=1;
                    nodesCount[maxEdg]-=1;
                    nodesEdges[ind].splice(nodesEdges[ind].indexOf(maxEdg),1);
                    nodesEdges[maxEdg].splice(nodesEdges[maxEdg].indexOf(ind),1);
                }
                var cou=0;
                for(num of nodesCount)
                    if(num>0 )
                        cou++;
                console.log(cou);
            
        }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});function processData(input) {
  input = input.trim().split('\n');
  var N = Number(input.shift())
  var arr = new Array(input.length)

  for (var i = 0; i < input.length; i++) {
    var d = Number(input[i].substr(0, input[i].indexOf(' ')))
    var m = Number(input[i].substr(input[i].indexOf(' ') + 1))
    arr[i] = { d: d, m: m };
  }

  var step = 0;
  var ans = 0;
  var used = [];

  for (var i = 0; i < arr.length; i++) {
    step += arr[i].m;
    arr[i].pos = step;
    used.push(arr[i]);
    
    for (var j = i - 1; j >= 0; j--) {
      var diff = used[j + 1].pos - used[j + 1].d
      var comp = used[j].pos - used[j].d + used[j + 1].m

      if (diff > 0 && comp > 0 &&  diff < ans && i > 1000) {
        break
      }

      if (diff > comp) {
        used[j + 1].pos -= used[j].m;
        used[j].pos += used[j + 1].m;
        var tmp = used[j + 1]
        used[j + 1] = used[j]
        used[j] = tmp
        ans = Math.max(ans, comp)
      } else {
        break;
      }
    }

    ans = Math.max(ans, arr[i].pos - arr[i].d)
    console.log(ans)
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