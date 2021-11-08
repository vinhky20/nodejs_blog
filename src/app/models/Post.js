const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Post = new Schema({
    name: { type: String, required: true, },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true, },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    // Thêm khoá unique với giá trị true để ko bị trùng slug khi tạo khoá học giống nhau
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
Post.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Post', Post);