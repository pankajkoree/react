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
const q1 = new Queue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.display()

// task 6:
class PrinterQueue{
    constructor(){
        this.queue2 = new Queue()
    }
    addJob(job){
        this.queue2.enqueue(job)
        console.log("Added print job : "+job);
    }
    processedJob(){
        if(this.queue2.isEmpty()){
            console.log("No jobs to process");
            return
        }
        const job = this.queue2.dequeue()
        console.log("Processing print job ",job);
    }
    displayJobs(){
        console.log("Current print jobs in the queue : ");
        this.queue2.display()
    }
}
const pQ = new PrinterQueue()
pQ.addJob("pdf")
pQ.addJob("docs")
pQ.addJob("ppt")
pQ.displayJobs()

pQ.processedJob()
pQ.processedJob()
pQ.displayJobs()