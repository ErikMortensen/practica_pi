const { createUser, findUsers, findUserById } = require("../controllers/usersControllers");

const getUsersHandler = async (req, res) => {
    try {
        const users = await findUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await findUserById(id);
        res.status(200).send(user);
    } catch ({ message }) {
        res.status(400).send({ error: message });
    }
    const user = findUserById(id);
};

const createUserHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newUser = await createUser(name, email, phone);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler
};