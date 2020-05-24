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
}

module.exports = DoublyLinkedList;
