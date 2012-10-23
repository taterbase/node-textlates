var fs = require('fs');

function render(file, data, cb){
  var found = {};

  fs.readFile(file, 'utf8', function(err, file){
    if(err)
      return cb(err);

    var values = file.match(/#{[^}\r\n]*}/g);

    for(var value in values){
      value = values[value].substring(2, values[value].length - 1);; 

      if(!found[value]){
        file = file.replace('#{' + value + '}', data[value]);
        found[value] = true;
      }
    }

    return cb(null, file);
  });
}

module.exports.render = render;
