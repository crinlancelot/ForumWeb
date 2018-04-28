const chai = require('chai');
const request = require('supertest');
const app = require('../../src/app');
const fixtures = require('./fixtures');
const mongooseHelper = require('./mongooseHelper');
const expect = chai.expect;

describe('Threads endpoint', () => { 
  describe('when calling GET /threads', () => {
    before(async () => await fixtures.seedThreads());
	after(async () => await mongooseHelper.dropDatabase());

	it('returns a list of threads', () => {
	  return request(app).get('/threads')
		.expect('Content-Type', /json/) // Content-Type aplication json
		.expect(200)
		.then(response => {
		  const {body} = response; // const body response.body;

		  expect(body.data).to.have.length(2);
		  expect(body.data[0].title).to.equal('El sistema de matrícula está dañado');
		  expect(body.data[0].slug).to.equal('el-sistema-de-matricula-esta-danado');
		  expect(body.data[1].title).to.equal('El problema de transporte en Panamá');
		  expect(body.data[1].slug).to.equal('el-problema-de-transporte-en-panama');
		});
	});
  });

  describe('when data not found', () => {

	it('returns an empty array if are no threads', () => {	
	  return request(app).get('/threads')
		.expect('Content-Type', /json/) // Content-Type aplication json
		.expect(200)
		.then(response => {
		  const {body} = response; // const body response.body;

		  expect(body.data).to.have.length(0);
		});
	});
  });

  describe('when calling POST /threads', () => {

    xit('creates a new thread', () => {
	});

    xit('returns HTTP code 400 if invalid params are sent', () => {
	});
  });
});