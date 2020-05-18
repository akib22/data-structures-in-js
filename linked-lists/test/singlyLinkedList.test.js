const SinglyLinkedLIst = require('../singly-linked-lists/singlyLinkedLists');

describe('Singly Linked List', () => {
  describe('Instantiating SinglyLinkedList', () => {
    const list = new SinglyLinkedLIst();

    it("should list's head to be null", () => {
      expect(list.head).toBeNull();
    });

    it("should list's tail to be null", () => {
      expect(list.head).toBeNull();
    });

    it("should list's length equal to 0", () => {
      expect(list.length).toEqual(0);
    });
  });

  describe('push', () => {
    it('should return null when call with undefined value', () => {
      const list = new SinglyLinkedLIst();
      expect(list.push()).toBeNull();
    });

    it('should return a node with value of passing params', () => {
      const list = new SinglyLinkedLIst();
      expect(list.push(1).value).toEqual(1);
    });

    describe('for only one (first time) call', () => {
      const list = new SinglyLinkedLIst();
      list.push(1);

      it("should list's head value to be 1 and list's head next to be null", () => {
        expect(list.head.value).toEqual(1);
        expect(list.head.next).toBeNull();
      });

      it("should list's tail value to be 1 and list's tail next to be null", () => {
        expect(list.tail.value).toEqual(1);
        expect(list.tail.next).toBeNull();
      });

      it('should head and tail to be same object.', () => {
        expect(list.head).toBe(list.tail);
      });

      it("should list's length equal to 1", () => {
        expect(list.length).toEqual(1);
      });
    });

    describe('for more than one call', () => {
      const list = new SinglyLinkedLIst();
      const callCounter = 3;

      for (let i = 1; i <= callCounter; i++) {
        list.push(i);
      }

      it('should not head and tail to be same object.', () => {
        expect(list.head).not.toBe(list.tail);
      });

      it("should list's head value equal to 1 and next not to be null", () => {
        expect(list.head.value).toEqual(1);
        expect(list.head.next).not.toBeNull();
      });

      it("should list's second node value to be 2", () => {
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

  describe('pop', () => {
    const list = new SinglyLinkedLIst();

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
      it('should list tail to be previous node and length decrease by 1', () => {
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

  describe('shift', () => {
    const list = new SinglyLinkedLIst();

    describe('when list length is 0', () => {
      it('should return undefined.', () => {
        expect(list.shift()).toBeUndefined();
      });
    });

    describe('when list length is 1', () => {
      it('should list head and tail to be null as well as length to be 0', () => {
        list.push(1);
        list.shift();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toEqual(0);
      });
    });

    describe('when list length is greater than 1', () => {
      it('should list head to be next node of the list and length decrease by 1', () => {
        let num = 3;

        for (let i = 1; i <= num; i += 1) {
          list.push(i);
        }

        const length = list.length;
        list.shift();

        expect(list.head.value).toEqual(num - 1);
        expect(list.length).toEqual(length - 1);
      });
    });
  });

  describe('unshift', () => {
    const list = new SinglyLinkedLIst();

    it('should return null when call with undefined value', () => {
      expect(list.unshift()).toBeNull();
    });

    describe('when list length 0', () => {
      it('should head and tail same object and length to be 1', () => {
        list.unshift(1);
        expect(list.head).toEqual(list.tail);
        expect(list.length).toBe(1);
      });
    });

    describe('when list length is greater than 0', () => {
      it('should new node to be head and length increase by 1', () => {
        const testVal = 3;
        const length = list.length;
        list.unshift(testVal);
        expect(list.head.value).toEqual(testVal);
        expect(list.length).toBe(length + 1);
      });
    });
  });

  describe('get', () => {
    describe('when input is less than 0 or greater than list length', () => {
      const list = new SinglyLinkedLIst();

      it('should return undefined', () => {
        expect(list.get(-1)).toBeUndefined();
        expect(list.get(1)).toBeUndefined();
      });
    });

    describe('when input is between 0 to list length', () => {
      const list = new SinglyLinkedLIst();
      list.push(1);
      list.push(2);

      it('should return that indexed value', () => {
        expect(list.get(0).value).toBe(1);
        expect(list.get(1).value).toBe(2);
      });
    });
  });

  describe('set', () => {
    describe('when call without any value', () => {
      const list = new SinglyLinkedLIst();

      it('should return false.', () => {
        expect(list.set()).toBeFalsy();
      });
    });

    describe('when index less than 0 and greater than list length', () => {
      const list = new SinglyLinkedLIst();

      it('should return false', () => {
        expect(list.set(-1, -1)).toBeFalsy();
        expect(list.set(100, 100)).toBeFalsy();
      });
    });

    describe('when input is between 0 to list length', () => {
      const list = new SinglyLinkedLIst();
      list.push(1);
      list.push(2);

      it('should add new value in that node', () => {
        expect(list.set(0, 'new 1').value).toBe('new 1');
        expect(list.set(1, 'new 2').value).toBe('new 2');
      });
    });
  });

  describe('insert', () => {
    describe('when call without any value', () => {
      const list = new SinglyLinkedLIst();

      it('should return undefined without making any effect on list.', () => {
        expect(list.insert()).toBeUndefined();
      });
    });

    describe('when index less than 0 and greater than list length', () => {
      const list = new SinglyLinkedLIst();

      it('should return undefined without making any effect on list.', () => {
        expect(list.insert(-1, -1)).toBeUndefined();
        expect(list.insert(100, 100)).toBeUndefined();
        expect(list).toBe(list);
      });
    });

    describe('when input is between 0 to list length', () => {
      const list = new SinglyLinkedLIst();

      it('should add new node in list with input value', () => {
        expect(list.insert(0, 1).value).toBe(1);
        expect(list.insert(1, 2).value).toBe(2);
        expect(list.insert(1, 'should be replace').value).toBe('should be replace');
      });
    });
  });

  describe('remove', () => {
    describe('when call without any value', () => {
      const list = new SinglyLinkedLIst();

      it('should return undefined without making any effect on list.', () => {
        expect(list.remove()).toBeUndefined();
      });
    });

    describe('when index less than 0 and greater than list length', () => {
      const list = new SinglyLinkedLIst();

      it('should return undefined without making any effect on list.', () => {
        expect(list.remove(-1)).toBeUndefined();
        expect(list.remove(100)).toBeUndefined();
      });
    });

    describe('when input is between 0 to list length', () => {
      const list = new SinglyLinkedLIst();
      list.push(1);
      list.push(2);

      it('should remove that indexed node from list', () => {
        expect(list.remove(0).value).toBe(1);
        expect(list.remove(1).value).toBe(2);
      });
    });
  });
});
