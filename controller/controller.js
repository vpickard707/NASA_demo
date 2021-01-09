require("dotenv").config()
const axios = require("axios");
const db = require("../models");
const key = process.env.bananakey;

//mysql routes
//Find All Posts
module.exports = router;
findAllPosts: function(req, res) {
    db.Post.findAll({}).then(function (dbPost) {
        res.json(dbPost).catch((err)) => res.status(422).json(err));
    
    })
},
//createNewPost
// createNewPost: function (req, res) {
    // db.Post
}
//api routes from NASA
picoftheday: function (req, res){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then((res)) => res.json(res.data))
    .catch((err)) = > res.status(422).json(err));
}