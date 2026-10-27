const postService = require('../services/post.service')
const Uploadfile = require('../services/fileUpload.service')

module.exports.createPostController= async (req,res,next)=>{

const Description = req.body.Description
const Image_file_Upload = await Uploadfile.uploadFile(req.file.buffer)
const Image = Image_file_Upload.url;
const createPost = await postService.createPostModel(Image,Description);

if(createPost){
    res.status(201).json({message:"Post Created Successfully",
        Post:createPost
    })
}
}


module.exports.getAllPosts=async (req,res,next)=>{
    const Posts =await postService.getAllPostModel();
      return res.status(201).json({
            success: true,
            Posts:Posts
        });
    
}