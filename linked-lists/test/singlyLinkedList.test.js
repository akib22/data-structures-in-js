const SinglyLinkedLIst = require('../singly-linked-lists/singlyLinkedLists');

describe('Singly Linked List', () => {
  describe('Instantiating SinglyLinkedList', () => {
    const list = new SinglyLinkedLIst();

    it('should head to be null', () => {
      expect(list.head).toBe(null);
    });

    it('should tail to be null', () => {
      expect(list.head).toBe(null);
    });

    it('should length equal to 0', () => {
      expect(list.length).toEqual(0);
    });
  });
});
