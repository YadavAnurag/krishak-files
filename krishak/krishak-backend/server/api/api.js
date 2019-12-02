const router = require('express').Router()
const userRoutes = require('./user/userRoutes')
const productRoutes = require('./product/productRoutes')


router.use('/user-management', userRoutes)
router.use('/product-management', productRoutes)



module.exports = router 