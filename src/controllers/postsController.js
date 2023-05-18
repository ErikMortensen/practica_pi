const { Post } = require("../db");

const createPost = async (title, body, userId) => {
    const newPost = await Post.create({ title, body });

    await newPost.setUser(userId);

    return newPost;
};

module.exports = {
    createPost,
}