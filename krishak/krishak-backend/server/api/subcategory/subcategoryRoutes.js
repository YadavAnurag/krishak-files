const router = require('express').Router();
const controller = require('./subcategoryController');


router.param('id', controller.params)

router.route('/subcategories')
  .get(controller.getSubcategoryList)
  .post(controller.postSubcategory)

router.route('/subcategories/:id')
  .get(controller.getOne)
  .patch(controller.patchOne)
  .delete(controller.deleteOne);

module.exports = router;