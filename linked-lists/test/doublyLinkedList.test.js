const DoublyLinkedLIst = require('../doubly-linked-list/doublyLinkedList');

describe('Doubly Linked List', () => {
  describe('Instantiating DoublyLinkedLIst', () => {
    const list = new DoublyLinkedLIst();

    it("should list's head and tail to be null", () => {
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });

    it("should list's length equal to 0", () => {
      expect(list.length).toEqual(0);
    });
  });

  describe('push', () => {
    const list = new DoublyLinkedLIst();

    it('should return undefined when call with undefined value', () => {
      expect(list.push()).toBeUndefined();
    });

    it('should increase list length by 1', () => {
      list.push(1);
      expect(list.length).toBe(1);
    });

    describe('when list is empty', () => {
      const list = new DoublyLinkedLIst();
      list.push(1);

      it("should list's head value to be 1 and list's head next to be null", () => {
        expect(list.head.value).toEqual(1);
        expect(list.head.next).toBeNull();
      });

      it("should list's tail value to be 1 and list's tail next to be null", () => {
        expect(list.tail.value).toEqual(1);
        expect(list.tail.next).toBeNull();
      });
    });

    describe('when list list is not empty', () => {
      it('should add new node at the end as tail.', () => {
        list.push(2);
        expect(list.tail.value).toBe(2);
      });
    });
  });

  describe('pop', () => {
    const list = new DoublyLinkedLIst();
  
    describe('when list length is 0', () => {
      it('should return undefined', () => {
        expect(list.pop()).toBeUndefined();
      });
    });
  
    describe('when list length is 1', () => {
      it('should list head and tail to be null as well as length to be 0', () => {
        list.push(1);
        list.pop();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toEqual(0);
      });
    });
  
    describe('when list length is greater than 1', () => {
      it('should remove the last node and list tail to be previous node and length decrease by 1', () => {
        let num = 3;
  
        for (let i = 1; i <= num; i += 1) {
          list.push(i);
        }
  
        const length = list.length;
        list.pop();
  
        expect(list.tail.value).toEqual(num - 1);
        expect(list.length).toEqual(length - 1);
      });
    });
  });
});
