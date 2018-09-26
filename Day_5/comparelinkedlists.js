// Complete the CompareLists function below.


function CompareLists(llist1, llist2) {

    var temp1=llist1;
    var temp2=llist2;
    var flag=true;
    while(temp1 != null && temp2 != null){
        if(temp1.data != temp2.data){
            
            flag=false;
        }
            temp1=temp1.next;
            temp2=temp2.next;
    }
    if(!(temp1==null)&&(temp2==null)){
        flag=false;
    }
    return flag;

}