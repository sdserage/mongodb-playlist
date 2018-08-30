const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Updating records', function(){

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
  it('Updates one record in the database', function(done){
    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(() => {
      MarioChar.findOne({_id: char._id}).then(result => {
        assert(result.name === 'Luigi');
        done();
      });
    });
  });
})