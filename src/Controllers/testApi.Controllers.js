const testApi = require('../Services/testApi.Services')
const db = require('../../config/db.config')

module.exports.testApiget = (req, res) => {
    testApi.getReturn()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}


module.exports.tesApiinsert= (req, res) => {
    console.log(req.body)
    testApi.insertdata(req.body)
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