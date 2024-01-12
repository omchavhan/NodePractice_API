const express = require("express")

//Create Express App 
const app = express();
// use for form data pass beacause form data format is not json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.Router())

//For Web CORS Policy
var cors = require('cors')
app.use(cors())

// for Image upload
const path = require("path");
app.use(express.static("uploads"))

// Database connect
const conn = require('./config/db.config')


conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected Database!");
  });


//Setup Server Port 
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`My Express is running on ${port}`)
})

//Define Root Route 
app.get('/', (req, res)=>{
    res.send("Welcome To Test Project")
})

//Import Routes 
const testAPI = require('./src/Routes/testApi')


//Create Route 
app.use('/test', testAPI)


