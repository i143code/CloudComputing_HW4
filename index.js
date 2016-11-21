var express = require('express');
var watson = require('watson-developer-cloud');
//write to a filenamevar fs = require('fs
var fs = require('fs');
//word count


var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//get access now
var tone_analyzer = watson.tone_analyzer({
  username: "e5d8ec72-7e99-4593-be5b-e9e4bbb959a6",
  password: "ei8dkZPfmyi0",
  version: 'v3',
  version_date: '2016-05-19'
});

app.get('/',function(req,res){
  res.send("Welcome to Tone Analyzer App");
})
//crrate a schema to post database
app.post('/data',function(req,res){
  tone_analyzer.tone({ text:req.body.ashish},
  function(err, tone) {
    if (err)
      console.log(err);
    else
    res.send(JSON.stringify(tone, null, 2))
      //  res.send(JSON.stringify(tone, null, 2));
      //  fs.writeFile('./person.json', JSON.stringify(tone, null, 2));
});
})
//get the post data
app.listen(8000,function(){
  console.log('Listening to 8000')
})
