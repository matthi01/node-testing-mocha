const expect = require('expect');
const rewire = require('rewire');

//loading through rewire does load through require but also adds two extra methods onto App
// __set__ and __get__
let app = rewire('./app');

describe('App - using Spy:', () => {

// spies can come in handy when you are testing outer functions, but don't really
// care about the inner functions actually executing, you can instead swap out these inner
// functions with Spies and simply test that they are called with the expected arguments

  //define the spy with the same signature as the expected function
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('something', 50);
    expect(spy).toHaveBeenCalled().toHaveBeenCalledWith('something', 50);
  });

  it('should call saveUser with user object', () => {
    let email = 'something@somewhere.net';
    let password = '@Password1';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
