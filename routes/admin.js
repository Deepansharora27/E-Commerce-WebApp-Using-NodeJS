const express = require('express')
const path = require('path')
const bodyParser = require('body-parser'); 

//Router is Kind Of Like a Mini Express App tied to another Express App
const router = express.Router()

//Creating an Array Named Products , which will we can say contain information about the Form.

const products = [] ; 


router.get('/add-product',(req , res , next)=>{
    res.sendFile(path.join(__dirname,  '../' , 'views' , 'add-product.html'))
})

router.post('/add-product',(req , res , next) => {
    products.push({title : req.body.title})
    res.redirect('/'); 
})

exports.routes = router ; 
exports.products = products ; 

//First of All resolving why I am not getting the Log Message to the Console . 
