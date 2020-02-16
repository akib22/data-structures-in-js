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
}

module.exports = SinglyLinkedLIst;
