// Elijah Peake
// Homework 6


// Groups

class Group {
    constructor() {
      this.arrays = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.arrays.push(value);
      }
    }
  
    delete(value) {
      const index = this.arrays.indexOf(value);
      if (index !== -1) {
        this.arrays.splice(index, 1);
      }
    }
  
    has(value) {
      return this.arrays.includes(value);
    }
  
    static from(object) {
      const group = new Group();
      for (const value of object) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
  