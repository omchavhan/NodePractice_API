const express = require('express')
const routes = express.Router()
const testApiController = require('../Controllers/testApi.Controllers')
// import all controllers

// Add routes - all routes in here are starting with /
routes.get('/get', testApiController.testApiget);
routes.get('/get/:id',testApiController.testApigetreturntoid)
routes.post('/post',testApiController.tesApiinsert);
routes.delete('/delete/:id',testApiController.testApideletedata)

routes.post('/put/:id',testApiController.testApiupdatedatatoid)  // all records update
routes.post('/put', testApiController.testApiupdatedata) // single field or record update


module.exports = routes;
