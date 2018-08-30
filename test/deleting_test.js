const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Deleting records', function(){

  let char;

  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
    });

    char.save().then(() => {
      done();
    });
  })

  //Create tests
  it('Deletes one record from the database', function(done){
    MarioChar.findOneAndDelete({name: 'Mario'}).then(() => {
      MarioChar.findOne({name: 'Mario'}).then(result => {
        assert(result === null);
        done();
      });
    });
  });
})