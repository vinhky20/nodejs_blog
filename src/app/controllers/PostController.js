//Import model vào để xài
const Post = require('../models/Post');
//Import phần xử lý bảo mật của handlebars
const { mongooseToObject } = require('../../util/mongoose');

class PostController {
    // [GET] /posts/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug })
            .then(post =>
                res.render('posts/show', {
                    post: mongooseToObject(post)
                })
            )
            .catch(next);
    }

    // [GET] /posts/create
    create(req, res, next) {
        res.render('posts/create')
    }

    // [POST] /posts/store
    store(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA-xO9v_zNZz62Jg01hmjZMoC1PSw`;
        const post = new Post(req.body);
        post.save()
            .then(() => res.redirect('/me/stored/posts'))
            .catch(error => {});
    }

    // [GET] /posts/:id/edit
    edit(req, res, next) {
        Post.findById(req.params.id)
            .then(post => res.render('posts/edit', {
                post: mongooseToObject(post)
            }))
            .catch(next)
    }

    // [PUT] /posts/:id
    update(req, res, next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/posts'))
            .catch(next);
    }

    // [DELETE] /posts/:id
    delete(req, res, next) {
        Post.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /posts/:id/force
    forceDelete(req, res, next) {
        Post.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /posts/:id/restore
    restore(req, res, next) {
        Post.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /posts/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Post.delete({ _id: { $in: req.body.postIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);

                break;
            default:
                res.json({ message: 'Actions is invalid!' });
        }
    }
}

module.exports = new PostController;