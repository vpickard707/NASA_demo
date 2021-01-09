require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const key = process.env.bananakey;

module.exports = {
  picOfTheDay: function (req, res) {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then((response) => res.json(response.data))
      .catch((err) => res.status(422).json(err));
  },
  findAllPost: function (req, res) {
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost).catch((err) => res.status(422).json(err));
    });
  },
  createNewPost: function (req, res) {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      create_at: req.body.created_at,
    })
      .then(function (dbPost) {
        res.json(dbPost);
      })
      .catch((err) => res.status(422).json(err));
  },
};

// --------------------------------------------
//mysql routes
//Find All Posts
// module.exports = router;
// findAllPosts: function(req, res) {
//     db.Post.findAll({}).then(function (dbPost) {
//         res.json(dbPost).catch((err)) => res.status(422).json(err));

//     })
// },
// createNewPost
// createNewPost: function (req, res) {
//     db.Post.create({
//         title: req.body.title,
//         body: re
//     })
// }
//api routes from NASA
// picoftheday: function (req, res){
//     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
//     .then((res)) => res.json(res.data))
//     .catch((err)) = > res.status(422).json(err));
// }
