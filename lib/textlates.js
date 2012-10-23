var fs = require('fs');

function render(template, vars, cb){
  fs.readFile(template, 'utf8', function(err, template){
    if(err) return cb(err);

    var replacementRegex
      , identifier
      ;

    for (identifier in vars) {
      // Create dynamic regex that will find and replace all instances of the identifier
      replacementRegex = new RegExp('#{' + identifier + '}', 'g'); 
      template = template.replace(replacementRegex, vars[identifier]);
    }

    return cb(null, template);
  });
}

module.exports.render = render;
