const express = require('express');
// const testBlog = require('../models/testBlog');
const blog = require('../models/blog');
const categoryBlog = require('../models/newCategoryBlog');
const router = express.Router();

router.get('/test',(req,res) => {
    res.send("Server is running");
});

router.get('/blogs',(req,res) => {
    blog.find({}).sort({createdOn:-1})
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.post('/saveBlog',(req,res) => {

    const data = req.body;

    // to do validation

    const newBlog = new blog({
        title: data.title,
        auther: data.auther,
        category: data.category ?? 'News',
        blogPreview: data.blogPreview,
        imgUrl: data.imgUrl,
        blogBrief: data.blogBrief,
        blogContent: data.blogContent,
        reference: data.reference,
        url: data.title.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-")
    });
    
    //save
    newBlog.save((error) => {
        if(error){
            console.log(error);
        }else{
            res.json("Saved successfully");
        }
    });
});

router.get('/newBlog',(req,res) => {
    blog.find({}).sort({createdOn:1})
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.post('/savecategory',(req,res) => {
    const data = req.body;
    
    const newCategoryBlog = new categoryBlog({
        category : data.category
    });
    
    //save
    newCategoryBlog.save((error) => {
        if(error){
            console.log(error);
        }else{
            res.json("Saved successfully");
        }
    });
});

router.get('/getCategory',(req,res) => {
    categoryBlog.find({}).sort({createdOn:-1})
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.delete('/deleteblog/:id',(req,res) => {
    testBlog.findByIdAndDelete(req.params.id,(err,docs) =>{
        if(!err) res.send(docs);
        else "Error in Deleting";
    })
});

router.get('/view/:url',(req,res) => {
    blog.find({ url : req.params.url })
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.get('/recent/:url',(req,res) => {
    blog.find({ url : { $ne : req.params.url  }}).sort({createdOn:-1}).limit(7)
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})


//Api fetch for( Home Page )



router.get('/homeBlogs',(req,res) => {
    blog.find({}).sort({createdOn:1})
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.get('/homeTopFetch',(req,res) => {
    blog.find({}).sort({createdOn:-1}).limit(8)
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.get('/homeFetch',(req,res) => {
    blog.find({}).sort({createdOn:1}).limit(10)
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.get('/blogFetch/:category',(req,res) => {
    blog.find({ category : req.params.category }).sort({createdOn:-1})
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.get('/blogFetchHome/:category',(req,res) => {
    blog.find({ category : req.params.category }).sort({createdOn:-1}).limit(6)
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.get('/recentCategory/:category/:url',(req,res) => {
    blog.find({ url : { $ne : req.params.url  } , category : req.params.category }).sort({createdOn:-1}).limit(10)
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})


module.exports = router;
