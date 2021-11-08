// Tạo route trong foldler routes thì phải vào file 
// này khai báo route đã tạo

const newsRouter = require('./news');
const meRouter = require('./me');
const postsRouter = require('./posts');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/me', meRouter);


    app.use('/posts', postsRouter);

    app.use('/', siteRouter);

}

module.exports = route