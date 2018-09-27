// Complete the sortedInsert function below.


function sortedInsert(head, data) {
var newnode = new DoublyLinkedListNode(data);
    if(head == null)
       return newnode;
  else if(data < head.data){
       newnode.next = head;
      head.prev = newnode;
      return newnode;
  }
    else{
        newnode = sortedInsert(head.next,data);
        head.next = newnode;
        newnode.prev = head;
        return head;
    }
        

}