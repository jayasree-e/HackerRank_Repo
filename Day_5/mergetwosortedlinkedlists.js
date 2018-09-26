// Complete the mergeLists function below.


function mergeLists(head1, head2) {
var sortlist;
    if(head1 == null)
        return head2;
    else if(head2 == null)
        return head1;
    
        if(head1.data <= head2.data){
            sortlist = head1;
            sortlist.next=mergeLists(head1.next,head2);
        }
        else{
            sortlist = head2;
            sortlist.next = mergeLists(head1,head2.next);
        }
    return sortlist;
}