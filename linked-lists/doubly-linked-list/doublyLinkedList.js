class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    if (value === undefined) {
      return undefined;
    }

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length += 1;

    return newNode;
  }

  pop() {
    if (!this.head) return undefined;

    let removedNode;

    if (!this.head.next) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length -= 1;

    return removedNode;
  }

  unshift(value) {
    if (value === undefined) {
      return undefined;
    }

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

    return newNode;
  }

  shift() {
    if (!this.head) return undefined;

    let removedNode = this.head;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length -= 1;

    return removedNode;
  }

  get(value) {
    if (value === undefined || value < 0 || value >= this.length) {
      return undefined;
    }

    let node = this.head;

    while (value) {
      node = node.next;
      value -= 1;
    }

    return node;
  }

  set(index, value) {
    if (value === undefined) {
      return false;
    }

    const foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }

    foundNode.value = value;
    
    return true;
  }

  insert(index, value) {
    if (index === undefined || value === undefined || index > this.length) {
      return undefined;
    }

    if (!this.head  || index === 0) {
      return this.unshift(value);
    }

    if (this.length === index) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;

    return newNode;
  }
}

module.exports = DoublyLinkedList;
