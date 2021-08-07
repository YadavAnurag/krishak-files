const User = require('../api/user/userModel');
const Category = require('../api/category/categoryModel');
const Product = require('../api/product/productModel');
const Subcategory = require('../api/subcategory/subcategoryModel');

const categories = require('./fixtures/categories');
const subcategories = require('./fixtures/subcategories');
const products = require('./fixtures/products');
const users = require('./fixtures/users');

const createDoc = (model, doc)=>{
  return new Promise((resolve, reject)=>{
    new model(doc).save((err, saved)=> err? reject(err): resolve(saved));
  });
};
const cleanDB = async ()=>{
  process.stdout.write('Cleaning database...');
  
  let cleanPromises = [Category, Subcategory].map((model)=> model.deleteMany({}));
  console.log('done');
  return Promise.all(cleanPromises);
};

const createUsers = (users)=>{
  process.stdout.write('Seeding users...');

  let promises = users.map((user)=> createDoc(User, user));
  return Promise.all(promises)
    .then(
      console.log(`${users.length} users seeded`)
    );
};

const createCategories = (categories)=>{
  process.stdout.write('Seeding categories...');

  let promises = categories.map((category)=> createDoc(Category, category));
  return Promise.all(promises)
    .then(
      console.log(`${categories.length} category seeded`)
    ).catch((err)=> console.log('Error while seeding cateogories...', err));
};

const createSubcategories = (subcategories) => {
  process.stdout.write('Seeding subcategories...');

  let promises = subcategories.map(subcategory => createDoc(Subcategory, subcategory));
  return Promise.all(promises)
    .then(
      console.log(`${subcategories.length} subcateogories seeded`)
    ).catch((err)=> console.log('Error while seeding subcateogories...', err));
};

const createProducts = (products) => {
  process.stdout.write('Seeding products...');

  let promises = products.map(product => createDoc(Product, product));
  return Promise.all(promises)
    .then(  
      console.log(`${products.length} products seeded`)
    )
    .catch(err => console.log('Error white seeding products...', err));
};


const seedDatabase = ()=>{
  cleanDB()
  .then(createCategories(categories))
  .then(createSubcategories(subcategories))
  .then(createProducts(products))
  .catch((err)=> console.log('Error while seedingDatebase', err));
};
module.exports = seedDatabase;