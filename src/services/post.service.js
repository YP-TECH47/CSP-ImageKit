const postModel = require('../models/post.models')

module.exports.createPostModel=async (Image,Description)=>{
    
    if(!Image||!Description){
        throw new Error("All Feilde Are Required")
    }

    const Post = await postModel.create({
        Image:Image,
        Description:Description
    })
    return Post;
}

module.exports.getAllPostModel=async()=>{
const Posts = await postModel.find();
 
return Posts;
}