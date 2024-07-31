const mongoose = require('mongoose');

const blogSchema =  new mongoose.Schema({
    title : {
        type : String,
        require: true
     },
     auther : {
        type : String,
        require: true
     },
     category: {
        type: String
     },
     blogPreview : {
        type : String,
        require: true
     },
     imgUrl : {
        type : String,
        require: true
     },
     blogBrief : {
        type : String,
        require: true
     },
     blogContent : {
        type : String,
        require: true
     },
     reference : {
        type : String,
     },
    createdOn : {
        type : Date,
        default : new Date(),
    },
    url: {
        type:String,
        require: true
    }
});

//model

const blog = mongoose.model('blog',blogSchema);

module.exports = blog;
