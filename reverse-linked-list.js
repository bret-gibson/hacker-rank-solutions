function reverseList(head) {
    let prev = null;
    let temp = head;
    
    while(temp != null) {
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    
    return prev;    
};