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
});
