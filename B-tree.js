class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
function CreateNode(value) {
  const newNode = new Node(value);
  
  newNode.value = value;
  newNode.left = null;
  newNode.right = null;
    
  return newNode;
}

function Insert(root, value) {
  if (root === null) {
    return CreateNode(value);
  }
  
  if (value < root.value) {
    root.left = Insert(root.left, value);
  }
  
  if (value > root.value) {
    root.right = Insert(root.right, value);
  }
  
  return root;
}

function Find(root, value) {
  if (root === null) {
    return null;
  }
  
  if (root.value === value) {
    return root;
  }
  
  if (value < root.value) {
    return Find(root.left, value)
  } else {
    return Find(root.right, value)
  }
}



function LeftToRightTraversal(root) {
  if (root != null) {
    LeftToRightTraversal(root.left);
    console.log(root.value);
    LeftToRightTraversal(root.right);
  }
}

function BypassTopBottom(root) {
  if (root != null) {
    console.log(root.value);
    BypassTopBottom(root.left);
    BypassTopBottom(root.right);
  }
}

function BottomUpTraversal(root) {
  if (root != null) {
    BottomUpTraversal(root.left);
    BottomUpTraversal(root.right);
    console.log(root.value);
  }
}

function main() {
  let root = null;
  
  root = Insert(root, 50);
  root = Insert(root, 30);
  root = Insert(root, 70);
  root = Insert(root, 20);
  root = Insert(root, 40);
  root = Insert(root, 60);
  root = Insert(root, 80);
  
  console.log("Симметричный обход: ", LeftToRightTraversal(root));
  
  console.log("Поиск элемента 40:");
  const result = Find(root, 40);
  
  if (result != null) {
    console.log("Элемент найден");
  } else {
    console.log("Элемент не найден");
  }
}

main();
