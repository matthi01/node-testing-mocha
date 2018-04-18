const expect = require('expect');
const utils = require('./utils');

// describe lets you organize tests in individual blocks. Any tests defined
// in this block will be part of the certain test group
describe('Utils:', () => {

  it('should add two numbers', () => {
    let res = utils.add(33, 11);

    // if (res !== 44) {
    //   throw new Error(`Expected 44, but got ${res}`);
    // }
    expect(res).toBe(44).toBeA('number');
  });

  it('should square a given number', () => {
    let res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
    // if (res !== 25) {
    //   throw new Error(`Expected 25, but got ${res}`);
    // }
  });

  // some more examples
  it('should expect some values', () => {
    expect({name: 'matthi'}).toEqual({name: 'matthi'});
    expect([2,3,4]).toNotInclude(5);
  });

  describe('Async functions:', () => {
    // testing async functions
    // 'done' argument lets mocha know this is an async test, and won't let the test finish until it is called
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });

    // async version of square test
    it('should async square a given number', (done) => {
      utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
      });
    });
  });

});
