var router = require('express').Router();
var jwt = require('jwt-simple');
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var config = require('../../config');
router.post('/',function (req,res,next) {
    User.findOne({username:req.body.username}).select('password').select('username').exec(function(err,user){
        console.log(user);
        if(err){    return next(err);   }
        if(!user){  return res.sendStatus(401);    }
        bcrypt.compare(req.body.password,user.password,function(err,valid){
        if(err) {   return next(err);   }
        console.log(valid);
        if(!valid) {    return res.sendStatus(401)    }
        var token = jwt.encode({username: user.username},config.secret);
        res.send(token);
        })
    })
})
module.exports = router;