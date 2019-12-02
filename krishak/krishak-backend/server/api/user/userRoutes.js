const router = require('express').Router()
const controller = require('./userController')


router.param('id', controller.params)

router.route('/signup')
  .post(controller.postSignUp)

router.route('/login')
  .post(controller.postLogin)

router.route('/users')
  .get(controller.getUserList)
  .post(controller.postUserList)
  .delete(controller.deleteUserList)

router.route('/users/:id')
  .get(controller.getOne)
  .put(controller.put)
  .patch(controller.patch)
  .delete(controller.deleteOne)







module.exports = router