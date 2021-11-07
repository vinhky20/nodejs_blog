// Format của những cấu hình route giống nhau
// Copy từ đây tới:

const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:slug', courseController.show);

// Nếu có thêm url liên quan tới course thì viết vào đây

module.exports = router;
// tới đây cho mỗi route trong folder routes
// Chỉ thay đổi một số thông tin cho phù hợp, vd như tên controller