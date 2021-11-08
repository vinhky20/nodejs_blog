// Format của những cấu hình route giống nhau
// Copy từ đây tới:

const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

router.get('/create', postController.create);
router.post('/store', postController.store);
router.get('/:id/edit', postController.edit);
router.post('/handle-form-actions', postController.handleFormActions);
router.put('/:id', postController.update);
router.patch('/:id/restore', postController.restore);
router.delete('/:id', postController.delete);
router.delete('/:id/force', postController.forceDelete);
router.get('/:slug', postController.show);

// Nếu có thêm url liên quan tới post thì viết vào đây

module.exports = router;
// tới đây cho mỗi route trong folder routes
// Chỉ thay đổi một số thông tin cho phù hợp, vd như tên controller