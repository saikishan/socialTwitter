var Post = require('../../models/post');
var router = require('express').Router();
    router.get('/',function(req,res,next){
        Post.find().sort('-date').exec(function(err, posts){
            if(err) { return next(err)    }
            console.log("sending get")
            res.status(210).json(posts)
        });
    });
    router.post('/',function(req,res){
        console.log("the status to post");
        console.log(req.body);
        var post = new Post({
         username: req.body.username,
            body: req.body.body
        });
        post.save(function(err,post){
        if(err) console.log("we got a error");
        if(err) { return next(err) }
        res.status(201).json(post)
    });
});
module.exports = router;