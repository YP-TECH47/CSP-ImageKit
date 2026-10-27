const express= require('express')
const multer  = require('multer');



const router = express.Router()
const postController = require('../controllers/post.controller')


const upload = multer({ storage: multer.memoryStorage() });

router.post("/create-post", upload.single('Image'), postController.createPostController)
router.get("/get-post",postController.getAllPosts)

module.exports=router