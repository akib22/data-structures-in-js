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

    while(i < this.length - 1) {
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
}

module.exports = SinglyLinkedLIst;
