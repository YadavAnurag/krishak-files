const router = require('express').Router();

const categoryRoutes = require('./category/categoryRoutes');
const productRoutes = require('./product/productRoutes');
const subcategoryRoutes = require('./subcategory/subcategoryRoutes');
const userRoutes = require('./user/userRoutes');



router.use('/category-management', categoryRoutes);
router.use('/product-management', productRoutes);
router.use('/subcategory-management', subcategoryRoutes);
router.use('/user-management', userRoutes);


module.exports = router;