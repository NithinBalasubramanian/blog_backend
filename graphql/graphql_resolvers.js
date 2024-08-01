
const blog = require('../models/blog');

  const fetchBlogs = async () => {
    return await blog.find({}).sort({createdOn:-1})
    .then((data) => { 
        return data;
    })
    .catch((error) => { 
        console.log('error',error);
    })
  }

  const fetchByCategory = async (category) => {
   return await blog.find({ category : category }).sort({createdOn:-1})
    .then((data) => { 
        return data;
    })
    .catch((error) => { 
        console.log('error',error);
    })
 }

 const fetchBlogByUrl = async(url) => {
    return await blog.find({ url : url })
    .then((data) => { 
        return data;
    })
    .catch((error) => { 
        console.log('error',error);
    })
 }

 const handleBlog = async (title,auther,category,blogPreview,imgUrl,blogBrief,blogContent,reference,url) => {
    const newBlog = new blog({
        title: title,
        auther: auther,
        category: category ?? 'News',
        blogPreview: blogPreview,
        imgUrl: imgUrl,
        blogBrief: blogBrief,
        blogContent: blogContent,
        reference: reference,
        url: title.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-")
    });
    
    return await newBlog.save().then(() => {
        return { msg: "Saved successfully", status: true }
    })
 }
  
  
  const resolvers = {
    Query: {
      getBlogs: () => fetchBlogs(),
      getBlogsByCategory: (_, {category}) => fetchByCategory(category),
      getBlogByUrl: (_, {url}) => fetchBlogByUrl(url),
    },
    Mutation: {
        addBlog: (_, {title,auther,category,blogPreview,imgUrl,blogBrief,blogContent,reference}) => handleBlog(title,auther,category,blogPreview,imgUrl,blogBrief,blogContent,reference),
    },
}

  module.exports = { resolvers }