// Complete the deleteNode function below.


 
function deleteNode(head, position) {
var temp,delnode ;
    if(position == 0){
        head = head.next;
    }
        else{
            temp = head;
            for(var i=0;i<position-1;i++){
                temp=temp.next;
            }
            delnode = temp.next;
            temp.next = delnode.next;
        }
        return head;

}