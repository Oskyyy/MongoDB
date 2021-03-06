const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {
  it('should throw an error if no "name" arg', () => {
    const dep = new Department({});
  
    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });

  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
    for(let name of cases) {
      const dep = new Department({name});

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if "name" is not desired length', () => {
    const cases = ['kuba', 'ala', 'qwoijowqdoqiwjdnoijwndoiqjwdoijqowdij'];
    for(let name in cases) {
      const dep = new Department({name}); 

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    };
  });

  it('should return proper Department object if the name in correct', () => {
    const cases = ['Management', 'Human Resources'];
    for(let name of cases) {
      const dep = new Department({name}); 

      dep.validate(err => {
        expect(err).to.not.exist;
      });
    };
  });
});