const express = require('express')
const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    console.log('testing posts get')
    res.status(200).json({success: true});
})

postsRouter.post('/', (req, res) => {
    console.log('testing posts post')
    res.status(200).json({success: true});
})

module.exports = postsRouter;