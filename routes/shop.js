const path = require('path')

const express = require('express')

const router = express.Router(); 

router.get('/',(req , res , next) => {
    res.sendFile(path.join(__dirname ,  '../' ,  'views' , 'shop.html'))
    //Now here __dirname will point to the routes folder . 
    //As __dirname gives us the path to the file in which we use it 
})

module.exports = router

