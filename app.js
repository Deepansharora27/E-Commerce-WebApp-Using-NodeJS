const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin'); 
const shopRoutes = require('./routes/shop')

const app = express(); 

app.use(bodyParser.urlencoded({ extended : false}))

app.use(express.static(path.join(__dirname , 'public')))

app.use(adminData.routes)

app.use(shopRoutes)

app.use((req , res , next) => {
    res.status(404).sendFile(path.join(__dirname , 'views' , 'page-not-found.html'))
})

app.listen(3000); 

//Clear with the Motivation of Why Do we require a Templating Engine 
//Doubts which I am facing :
//==> {Not Able to Log the Request to the Console}