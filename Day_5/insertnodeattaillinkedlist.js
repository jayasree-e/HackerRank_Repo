// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
var newnode=new SinglyLinkedListNode(data);
           var temp=head;
            if(head==null){
                head=newnode;
            }
            else{
                while(temp.next!=null){
                    temp=temp.next;
                }
                temp.next=newnode;
            }
        return head;

}