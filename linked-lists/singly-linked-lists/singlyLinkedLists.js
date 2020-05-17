class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedLIst {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (!val) return null;

    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      const deletedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return deletedNode;
    }

    let deletedNode = null;
    let currentNode = this.head;
    let i = 1;

    while (i < this.length - 1) {
      currentNode = currentNode.next;
      i += 1;
    }

    deletedNode = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length -= 1;

    return deletedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      const deletedNode = this.head;
      if (!this.head.next) {
        this.tail = null;
      }
      this.head = deletedNode.next;
      this.length -= 1;
      return deletedNode;
    }
  }

  unshift(val) {
    if (!val) return null;

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this.head;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }

    let currentNode = this.head;

    while (index) {
      currentNode = currentNode.next;
      index -= 1;
    }

    return currentNode;
  }

  set(index, value) {
    const foundNode = this.get(index);
    
    if (!foundNode) return false;

    foundNode.value = value;

    return foundNode;
  }

  insert(index, value) {
    if (
      index === undefined ||
      index > this.length ||
      index < 0 ||
      value === undefined
    ) {
      return undefined;
    }
      
    if (index === 0) {
      return this.unshift(value);
    }
    
    if (index === this.length) {
      return this.push(value);
    } 
    
    const newNode = new Node(value);
    let foundNode = this.get(index - 1);
    newNode.next = foundNode.next;
    foundNode.next = newNode;
    this.length += 1;
    
    return newNode;
  }
}

module.exports = SinglyLinkedLIst;
