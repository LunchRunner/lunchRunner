const express = require('express')
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    console.log('testing users get')
    res.status(200).json({success: true});
})

usersRouter.post('/', (req, res) => {
    console.log('testing users post')
    res.status(200).json({success: true});
})


  
module.exports = usersRouter;