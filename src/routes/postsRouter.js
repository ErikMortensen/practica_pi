const { Router } = require('express');
const { createPostHandler } = require('../handlers/postsHandler');

const postsRouter = Router();

postsRouter.get('/', (req, res) => {
    res.status(200).send('posts');
});

postsRouter.post('/', createPostHandler);

module.exports = postsRouter;