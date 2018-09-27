// Complete the reverse function below.


function reverse(head) {
var current=head;
var temp = null;
    if(head == null)
        return;
    if(head.next==null)
        return head;
    while(current!=null){
          temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
          }
    if(temp!=null)
        head = temp.prev;
return head;
}