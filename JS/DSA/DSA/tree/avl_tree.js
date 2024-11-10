class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  // Get the height of a node
  height(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Get the balance factor of a node
  getBalance(node) {
    if (node === null) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  // Right rotate subtree rooted with y
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // Left rotate subtree rooted with x
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Insert a key into the subtree rooted with node and return the new root
  insert(node, key) {
    // 1. Perform the normal BST insertion
    if (node === null) return new Node(key);

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    } else {
      // Equal keys are not allowed in BST
      return node;
    }

    // 2. Update the height of this ancestor node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // 3. Get the balance factor to check whether this node became unbalanced
    const balance = this.getBalance(node);

    // If node becomes unbalanced, there are 4 cases

    // Left Left Case
    if (balance > 1 && key < node.left.key) return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && key > node.right.key) return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    // Return the unchanged node pointer
    return node;
  }

  // Utility function to print the tree in an in-order traversal
  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.key);
      this.inOrderTraversal(node.right);
    }
  }
}

// Driver code
let avl = new AVLTree();
let root = null;

root = avl.insert(root, 10);
root = avl.insert(root, 20);
root = avl.insert(root, 30);
root = avl.insert(root, 40);
root = avl.insert(root, 50);
root = avl.insert(root, 25);

console.log("In-order traversal of the constructed AVL tree:");
avl.inOrderTraversal(root);
