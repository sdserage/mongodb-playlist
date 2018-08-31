const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests
describe('Nesting records', function(){
  // Create tests
  it('Create an author with sub-documents', function(done){
    let pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{title: 'Name of the Wind', pages: 400}],
    });
    pat.save().then(function(){
      Author.findOne({name: 'Patrick Rothfuss'}).then(function(result) {
        assert(result.books.length === 1);
        done();
      });
    });
  });
});