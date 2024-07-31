const mongoose = require('mongoose');

const categorySchema =  new mongoose.Schema({
    category : String
});

//model

const newCategoryBlog = mongoose.model('category',categorySchema);

module.exports = newCategoryBlog;
