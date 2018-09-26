function removeDuplicates(head) {
var temp =head;
    while(temp && temp.next){
        if(temp.data == temp.next.data){
           temp.next = temp.next.next;
           }
        else
            temp = temp.next;
    }
        return head;
    

}