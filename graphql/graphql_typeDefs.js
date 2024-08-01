const typeDefs = `

    type Blog {
        title:  String
        auther:  String
        category: String
        blogPreview: String
        imgUrl: String
        blogBrief: String
        blogContent: String
        reference: String
        url: String
    }

    type Message {
        msg: String
        status: Boolean
    }

    type Query {
        getBlogs: [Blog]
        getBlogsByCategory(category: String!): [Blog]
        getBlogByUrl(url: String!): [Blog]
    }

    type Mutation {
        addBlog(
            title: String,
            auther: String,
            category: String,
            blogPreview: String,
            imgUrl: String,
            blogBrief: String,
            blogContent: String,
            reference: String
        ): Message
    }
`;

module.exports = { typeDefs }