const mongoose = require('mongoose');

const testSchema =  new mongoose.Schema({
    category : String,
    title : {
        type : String,
        required : true,
        unique : true,
    },
    url : String,
    auther : String,
    blog : String,
    imgUrl : String, 
    key : String,
    videoLink : String,
    preheading : String,
    subPara :  [{
        Content: String,
        SubHeading : String
    }],
    subLink :  [{
        linkFor: String,
        link : String
    }],
    createdOn : {
        type : Date,
        default : new Date(),
    },
    reference : String,
    // fileName : String,
    // filePath : String
});

//model

const testBlog = mongoose.model('test',testSchema);

module.exports = testBlog;
