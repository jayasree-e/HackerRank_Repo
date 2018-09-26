// Complete the getNode function below.


function getNode(head, positionFromTail) {
    var temp=head;
    var count =0 ;
    while(temp!=null){
          temp=temp.next;
            count++;
          }
    if(count<positionFromTail)
        return;
    for(var i = 1; i < count-positionFromTail; i++) 
        head = head.next; 
 
    return head.data;
}