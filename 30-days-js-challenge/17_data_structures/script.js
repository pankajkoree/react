// task 1
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
node2.next = null;
console.log(node1);
console.log(node2);

// task 2:
class LinkedList {
  constructor() {
    this.head = null;
  }

  addEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  removeEnd() {
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }
  display() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}
const ll = new LinkedList();
ll.addEnd(1);
ll.addEnd(2);
ll.addEnd(3);
ll.addEnd(4);
ll.display();

ll.removeEnd();
ll.display();

// task 3:
class Stack {
  constructor() {
    this.items = [];
  }
  pushElement(element) {
    this.items.push(element);
  }
  popElement() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty. Can't pop element");
    }
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty. Can't peek");
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  display() {
    console.log(this.items);
  }
}
const stack1 = new Stack();
stack1.pushElement(5);
stack1.pushElement(15);
stack1.pushElement(25);
stack1.display();

stack1.popElement();
stack1.display();

stack1.peek();
stack1.display();

// task 4:
function reverseString(string1) {
  const stack2 = new Stack();
  for (let i = 0; i < string1.length; i++) {
    stack2.pushElement(string1[i]);
  }
  let reversedStr = "";
  while (!stack2.isEmpty()) {
    reversedStr += stack2.popElement();
  }
  return reversedStr;
}
console.log(reverseString("javascript"));

// task 5:
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty. Can't dequeue");
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty. Can't get front element");
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length;
  }
  display() {
    console.log(this.items);
  }
}
const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.display();

// task 6:
class PrinterQueue {
  constructor() {
    this.queue2 = new Queue();
  }
  addJob(job) {
    this.queue2.enqueue(job);
    console.log("Added print job : " + job);
  }
  processedJob() {
    if (this.queue2.isEmpty()) {
      console.log("No jobs to process");
      return;
    }
    const job = this.queue2.dequeue();
    console.log("Processing print job ", job);
  }
  displayJobs() {
    console.log("Current print jobs in the queue : ");
    this.queue2.display();
  }
}
const pQ = new PrinterQueue();
pQ.addJob("pdf");
pQ.addJob("docs");
pQ.addJob("ppt");
pQ.displayJobs();

pQ.processedJob();
pQ.processedJob();
pQ.displayJobs();

// task 7:
class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new TreeNode(1);
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(3);
root.left = leftChild;
root.right = rightChild;

// task 8:
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}

const bt = new BinaryTree();
bt.insert(5);
bt.insert(3);
bt.insert(7);
bt.insert(2);
bt.insert(4);
bt.insert(6);
bt.insert(8);

console.log(bt.inOrderTraversal());

// task 9:
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1); // Comment this line for a directed graph
    }
  }
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
console.log(graph.bfs("A"));

// task 10:
class Graph2 {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  bfsShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
      const path = queue.shift();
      const vertex = path[path.length - 1];
      if (vertex === end) {
        return path;
      }
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }

    return null;
  }
}
const graph1 = new Graph2();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");
graph1.addVertex("F");
graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("C", "E");
graph1.addEdge("D", "E");
graph1.addEdge("D", "F");
graph1.addEdge("E", "F");
console.log(graph1.bfsShortestPath("A", "F"));
