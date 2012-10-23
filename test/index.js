"use strict";

var textlate = require(__dirname + '/..')
  , fs = require('fs')
  , file = __dirname + '/test.txt'
  , data = {
      name: 'Taterbase'
    , greeting: 'Y hello thar'
    , farewell: 'brblol'
  }
  ;

describe('Textlate', function(){
  it('should convert string vars with the data provided by a hash', function(done){
    textlate.render(file, data, function(err, result){
      if(!result.match(/#{[^}\r\n]*}/g))
        done();
      else
        done(new Error("Did not render file correctly", result));
    });
  });
});
