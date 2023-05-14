const { Router } = require('express');

const postsRouter = Router();

postsRouter.get('/', (req, res) => {
    res.status(200).send('posts');
});

module.exports = postsRouter;