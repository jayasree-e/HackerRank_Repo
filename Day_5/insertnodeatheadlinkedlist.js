// Complete the insertNodeAtHead function below.


function insertNodeAtHead(head, data) {
var newnode=new SinglyLinkedListNode(data);
            if(head==null)
                head=newnode;
            else{
               newnode.next=head; 
            }
        return newnode;

}