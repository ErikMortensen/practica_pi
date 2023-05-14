const { User } = require('../db');

const createUser = async (name, email, phone) => await User.create({ name, email, phone });

const findUsers = async () => await User.findAll();

const findUserById = async (id) => await User.findByPk(id);


module.exports = {
    createUser,
    findUsers,
    findUserById
};