// Format của những cấu hình route giống nhau
// Copy từ đây tới:

const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);


// Nếu có thêm url liên quan tới me thì viết vào đây

module.exports = router;
// tới đây cho mỗi route trong folder routes
// Chỉ thay đổi một số thông tin cho phù hợp, vd như tên controller