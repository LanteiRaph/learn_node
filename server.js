//
//Import express and the body parser
const express = require('express')
const bodyparser = require("body-parser")

//Create and app from the express onbject to use.
const app = express();

//Pare the requst content-type application json 
app.use(bodyparser.json())

//Parse the request of content-type:application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: true}))

//Define routes, the home route
app.get('/', (req, res ) => {
    res.json({messege: "Welcome to our application Provide more route params to retrive data"})
})
//routes
require("./app/routes/customer.routes.js")(app);
//Listen to port 3000 for the application
app.listen(3000, () => {
    console.log("Server is Running on Port 3000") 
})