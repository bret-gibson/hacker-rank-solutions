function isPalindrome(head) {

    let current = head;

    function traverse(node) {

        if (node === null) {
            return true;
        }

        let previousIsSame = traverse(node.next);

        let currentIsSame = current.val === node.val;
        current = current.next;
        return previousIsSame && currentIsSame;
    }
    return traverse(head);
};