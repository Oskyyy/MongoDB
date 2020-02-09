const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server.js');
const Department = require('../../../models/department.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('DELETE /api/departments', () => {

  before(async () => {
    const testDepOne = new Department({ _id: '5d9f1140f10a81216cfd4408', name: 'Department #1' });
    await testDepOne.save();
  });

  it('/:id should update chosen document and return success', async () => {
    const res = await request(server).delete('/api/departments/5d9f1140f10a81216cfd4408');
    const newDepartment = await Department.find();
    expect(res.status).to.be.equal(200);
    expect(newDepartment).to.not.be.null;  
  });

  after(async () => {
    await Department.deleteMany();
  });

});