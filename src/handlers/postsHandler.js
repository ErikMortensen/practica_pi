const { createPost } = require('../controllers/postsController');

const createPostHandler = async (req, res) => {
    const { title, body, userId } = req.body;

    try {
        const newPost = await createPost(title, body, userId);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = {
    createPostHandler
}