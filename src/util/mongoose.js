// Xử lý lỗi bảo mật của handlebars sau khi lấy dữ liệu về từ csdl
module.exports = {
    multipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};