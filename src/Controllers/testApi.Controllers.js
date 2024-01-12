const testApi = require('../Services/testApi.Services')
const db = require('../../config/db.config')
const sharp = require('sharp');

module.exports.testApiget = (req, res) => {
    testApi.getReturn()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}



module.exports.testApigetcommentlist = (req, res) => {
    testApi.getCommentslist()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

// use two params   
module.exports.testApigetSignup = (req, res) => {
    console.log(req.query)
    const { Mail_Id, Password } = req.query;
    testApi.getReturn_signin(Mail_Id, Password)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

module.exports.tesApilogin_singup= (req, res) => {
    console.log(req.body)
    testApi.login_signup(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}



module.exports.tesApiinsert_commentlist = (req, res) => {
    console.log(req.body)
    testApi.insertdata_commentlist(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

module.exports.tesApiinsert_signup= (req, res) => {
    console.log(req.body)
    testApi.insertdata_signup(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApigetreturntoid= (req, res) => {
    console.log(req.params.id)
    testApi.getReturntoid(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApideletedata = (req,res) => {
    console.log(req.params.id)
    testApi.deletedata(req.params.id)
    // if(affectedRows == 0)
    //    res.status(404).json('no records with given id: '+ req.params.id)
    // else
    //    res.send("delete successfully!")

    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApiupdatedatatoid = (req,res) => {
    console.log(req.params.id, req.body)
    testApi.updatedatatoid(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApiupdatedata = (req,res) =>{
    console.log(req.body)
    testApi.updatedata(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

// -------------------------------------------------------------------------------------------------------------


module.exports.testApigetlogin =(req, res) => {
    testApi.getLogin(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

module.exports.testApipostlogin = (req,res) =>{
    console.log(req.body)
    testApi.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApi_Requirement = (req, res) =>{
    testApi.requirement_profile(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApi_que_video_upload = (req,res)=>{
    testApi.que_video_upload(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.testApi_blogform_insert= (req,res)=>{
    console.log(req.body," Body")
    console.log(req.file, " File Name")
    testApi.blogform_insert({...req.body, ...req.file})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}



module.exports.testApi_blogsget = (req, res) => {
    testApi.getBlogs()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}