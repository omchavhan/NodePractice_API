const express = require('express')
const routes = express.Router()
const testApiController = require('../Controllers/testApi.Controllers')

// Use for img upload
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    },
});
const upload = multer({storage});

// import all controllers

// Add routes - all routes in here are starting with /
routes.get('/get', testApiController.testApiget);
routes.get('/getcomment', testApiController.testApigetcommentlist);
// use two params
routes.get('/signup_login', (req, res) => {testApiController.testApigetSignup(req, res)})
// routes.post('/signup',testApiController.testApigetSignup)
routes.get('/get/:id',testApiController.testApigetreturntoid)
routes.post('/commentlist',testApiController.tesApiinsert_commentlist);
routes.post('/signup',testApiController.tesApiinsert_signup);
routes.delete('/delete/:id',testApiController.testApideletedata)

routes.post('/put/:id',testApiController.testApiupdatedatatoid)  // all records update
routes.post('/put', testApiController.testApiupdatedata) // single field or record update
routes.get('/login/:id',testApiController.testApigetlogin)
routes.post('/login', testApiController.testApipostlogin)
routes.post('/req',testApiController.testApi_Requirement)
routes.post('/ques_video', testApiController.testApi_que_video_upload)

// Blogs API
routes.post('/blogs', upload.single('image'),testApiController.testApi_blogform_insert) // upload use for img 
routes.get('/blogsget',testApiController.testApi_blogsget)


module.exports = routes;
