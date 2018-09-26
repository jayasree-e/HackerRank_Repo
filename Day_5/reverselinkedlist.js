// Complete the reverse function below.


function reverse(head) {
var current,nextnode=null,previous=null;
        current = head;
        while(current!=null){
            nextnode = current.next;
            current.next = previous;
            previous = current;
            current = nextnode;
        }
            head = previous;
        return head;

}