//Import model vào để xài
const Post = require('../models/Post');
//Import phần xử lý bảo mật của handlebars
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    index(req, res, next) {
        Post.find({})
            .then(posts => {
                res.render('home', {
                    posts: multipleMongooseToObject(posts)
                });
            })
            .catch(next);

        // res.render('home');
    }


    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;