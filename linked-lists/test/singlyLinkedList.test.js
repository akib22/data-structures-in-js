const SinglyLinkedLIst = require('../singly-linked-lists/singlyLinkedLists');

describe('Singly Linked List', () => {
  describe('Instantiating SinglyLinkedList', () => {
    const list = new SinglyLinkedLIst();

    it('should list\'s head to be null', () => {
      expect(list.head).toBeNull();
    });

    it('should list\'s tail to be null', () => {
      expect(list.head).toBeNull();
    });

    it('should list\'s length equal to 0', () => {
      expect(list.length).toEqual(0);
    });
  });

  describe('push', () => {
    it('should return a node with value of passing params', () => {
      const list = new SinglyLinkedLIst();
      expect(list.push('22').value).toEqual('22');
    });

    describe('for only one (first time) call', () => {
      const list = new SinglyLinkedLIst();
      list.push(1);

      it('should list\'s head value to be 1 and list\'s head next to be null ', () => {
        expect(list.head.value).toEqual(1);
        expect(list.head.next).toBeNull();
      });

      it('should list\'s tail value to be 1 and list\'s tail next to be null ', () => {
        expect(list.tail.value).toEqual(1);
        expect(list.tail.next).toBeNull();
      });

      it('should head and tail to be same object.', () => {
        expect(list.head).toBe(list.tail);
      });

      it('should list\'s length equal to 1', () => {
        expect(list.length).toEqual(1);
      });
    });

    describe('for more than one call', () => {
      const list = new SinglyLinkedLIst();
      const callCounter = 3;
      
      for(let i = 1; i <= callCounter; i++) {
        list.push(i);
      }

      it('should not head and tail to be same object.', () => {
        expect(list.head).not.toBe(list.tail);
      });

      it('should list\'s head value equal to 1 and next not to be null ', () => {
        expect(list.head.value).toEqual(1);
        expect(list.head.next).not.toBeNull();
      });

      it('should list\'s second node value to be 2', () => {
        expect(list.head.next.value).toEqual(2);
      });

      it(`should list\'s tail value equal to ${callCounter}(callCounter) and next to be null`, () => {
        expect(list.tail.value).toEqual(callCounter);
        expect(list.tail.next).toBeNull();
      });

      it(`should list\'s length equal to ${callCounter}(callCounter)`, () => {
        expect(list.length).toEqual(callCounter);
      });
    });
  });
});
