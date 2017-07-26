var router = require('express').Router();
var jwt = require('jwt-simple');
var User = require('../../models/user');
var bcrypt = require('bcrypt'); 
var config = require('../../config')  
router.post('/',function(req,res,next){
    console.log("got the req");
    var user = new User({username:req.body.username})
    bcrypt.hash(req.body.password,10,function(err,hash){
        user.password = hash;
        console.log(req.body);
        user.save(function(err,user){
            if(err) { throw next(err) }
            res.send(201);
        })
    });
});
router.get('/',function(req,res,next){
    if(!req.headers['x-auth']){
        return res.send(401)
    }
    var auth = jwt.decode(req.headers['x-auth'],config.secret);
    User.findOne({username:auth.username},function(err,user){
        if(err) {   return next(err)    }
        res.json(user);
    })
    //pull user info from the database
})
module.exports = router;