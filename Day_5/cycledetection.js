'use strict';
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

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep) {
    var pos=0;
    var temp=node;
    while (pos<15) {
        if(temp!=null)
        console.log(String(temp.data));

        temp = temp.next;

        if (node !== null) {
           console.log(sep);
        }
        pos++;
    }
}
function hasCycle(head) {
    var temp=head;
    var flag=false,a=0;
    while((a>=0)&&(a<1000)){
        if(temp!==null){
            
            a++;
        }
        else{
            break;
        }
        temp=temp.next;
    }
    if(temp==null){
        flag=false;
    }
    else{
        flag=true;
    }
    return flag;

}
function main() {
    

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const index = parseInt(readLine(), 10);

        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }
      
      	var extra;
        var temp = llist.head;

        for (var i = 0; i < llistCount; i++) {
          	if(i==index)
          	    extra=temp;

          	if (i != llistCount-1) {
            	temp = temp.next;
          	}
        }
        if(extra!=null)
            temp.next = extra;
       
        let result = hasCycle(llist.head);
        
       console.log((result ? 1 : 0) + "\n");
    }

   
}
