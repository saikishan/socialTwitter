var websockets = require('../../websockets')
var pubsub = require('pubsub-js')
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
        var post = new Post({
            body: req.body.body
        });
        console.log('new post is aarriverd');
        post.username = req.auth.username;
        post.save(function(err,post){
        if(err) { return next(err) }
        pubsub.publish('new_post', post);
        res.status(201)//.json(post)
    });
});
pubsub.subscribe('new_post',function (_,post){
    console.log(post)
    websockets.broadcast('new_post',post)
})
module.exports = router;