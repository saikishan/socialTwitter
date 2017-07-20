var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    console.log("serving web page");
    res.sendfile("Layouts/index.html");
});
router.get('/favicon.ico',function(req,res){
    res.sendfile("Layouts/favicon.ico");
})
router.use(express.static(__dirname+'/../assets'));
module.exports=router;