const express = require('express');

//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();

router.route('/').get((req, res) => {
    console.log('here I am')
    res.send('all items will be renderd here')
    
})
 
module.exports = router;