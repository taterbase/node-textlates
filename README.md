####Textlates

Textlates is a simple template library for text files in Node.JS

###Usage

Create your basic text file with the formatting you want, and wrap variables you would like to insert in the familiar string interoplation syntax #{}

```
Hello #{name}

#{greeting}

What would you like to eat for #{meal} today?
```

Require in textlates and then pass it the files location, the data for the variables you would like inserted, and a normal callback.

```javascript
var textlates = require('textlates')
  , file = __dirname + '/file.txt'
  ;

textlates.render(file, {name: 'taterbase', greeting: 'How are you today?', meal: 'breakfast'}, function(err, result){
  if(err)
    return console.log(err);

  console.log(result);

  /*

  Hello taterbase

  How are you today?

  What would you like to eat for breakfast today?

  */
});
```

###License
MIT
