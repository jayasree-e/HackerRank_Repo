// Complete the insertNodeAtPosition function below.

function insertNodeAtPosition(head, data, position) {
var newnode=new SinglyLinkedListNode(data);
            var temp=head;
            
            for(var i=0;i<position-1;i++){
                temp=temp.next;
            }
            newnode.next=temp.next;
            temp.next=newnode;
        return head;

}