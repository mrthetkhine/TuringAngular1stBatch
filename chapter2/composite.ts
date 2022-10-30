type LeafNode = {
    data : string
};
type TreeNode = {
    children : Array<Tree>
}
type Tree = LeafNode | TreeNode;

let tree : Tree = {
    children : [
        {
            data : "A"
        },
        {
            children : [{data : "B"}]
        }
    ]
}
console.log("tree ",tree);