// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
        var temp = head;
        while(temp!=null){
           console.log(temp.data);
            temp = temp.next;
        }

}