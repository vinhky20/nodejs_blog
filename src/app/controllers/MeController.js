//Import model vào để xài
const Post = require('../models/Post');
//Import phần xử lý bảo mật của handlebars
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    // [GET] /me/stored/posts
    storedPosts(req, res, next) {

        Promise.all([Post.find({}), Post.countDocumentsDeleted()])
            .then(([posts, deletedCount]) =>
                res.render('me/stored-posts', {
                    deletedCount,
                    posts: multipleMongooseToObject(posts)
                })
            )
            .catch(next);

        // Post.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});

        // Post.find({})
        //     .then(posts => {
        //         res.render('me/stored-posts', {
        //             posts: multipleMongooseToObject(posts)
        //         });
        //     })
        //     .catch(next);
    }

    // [GET] /me/trash/posts
    trashPosts(req, res, next) {
        Post.findDeleted({})
            .then(posts => {
                res.render('me/trash-posts', {
                    posts: multipleMongooseToObject(posts)
                });
            })
            .catch(next);
    }
}

module.exports = new MeController;