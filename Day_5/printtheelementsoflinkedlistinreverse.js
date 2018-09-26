// Complete the reversePrint function below.


function reversePrint(head) {
var temp=head;
            if(head == null)
                return;
            reversePrint(head.next);
            console.log(head.data);

}