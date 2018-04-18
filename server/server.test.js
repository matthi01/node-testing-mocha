const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server:', () => {

  describe('GET: root (/):', () => {
    it('root should return response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    });
  });

  describe('GET: /users:', () => {
    it('should return users object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            admin: "admin",
            users: ['user1', 'user2']
          })
        })
        .end(done);
    });
  });

});
