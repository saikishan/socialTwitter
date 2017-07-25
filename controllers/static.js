var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/',function(req,res){
    console.log("serving web page");
    res.sendFile(path.join(__dirname,'../Layouts','app.html'));
});
router.get('/favicon.ico',function(req,res){
    res.sendfile(path.join(__dirname,'../Layouts','favicon.ico'));
})
router.use(express.static(__dirname+'/../templates'));
router.use(express.static(__dirname+'/../assets'));
module.exports=router;