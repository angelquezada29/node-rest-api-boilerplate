const chai = require('chai');
const request = require('supertest');
const server = require('../../src/index');

const { expect } = chai;

describe('App', () => {
  it('Should return codigo status 200', (done) => {
    request(server).get('/users')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.error).to.equal(false);
        done();
      });
  });
  it('The user list should not be null and error false', (done) => {
    request(server).get('/users')
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.error).to.equal(false);
        expect(res.body.response.users).to.be.an('array');
        expect(res.body.response.users).to.not.be.empty;
        done();
      });
  });
  it('The user list should have the age attribute', (done) => {
    request(server).get('/users')
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.error).to.equal(false);
        expect(res.body.response.users[0].age).to.be.an('number');

        done();
      });
  });
  it('The user list should have the age attribute valid', (done) => {
    request(server).get('/users')
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.error).to.equal(false);
        expect(res.body.response.users[0].age).to.be.within(1, 150);

        done();
      });
  });
  it('The user list should have the email attribute valid', (done) => {
    request(server).get('/users')
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.error).to.equal(false);
        expect(res.body.response.users[0].email).to.include('@');
        done();
      });
  });
});
