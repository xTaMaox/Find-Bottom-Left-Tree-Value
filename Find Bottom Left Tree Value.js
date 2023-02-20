/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root===null) return null;
    const queue = [root];
    let left = null;
    while(queue.length) {
        const node = queue.shift();
        if(node.left===null && node.right === null) left = node.val;
        if(node.right) queue.push(node.right);
        if(node.left) queue.push(node.left);
    }
    return left
};