var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/posts',require('./controllers/api/posts'));
app.use(require('./controllers/static'));
app.listen(3000,function(){
    console.log("Server Listining on",3000);
});