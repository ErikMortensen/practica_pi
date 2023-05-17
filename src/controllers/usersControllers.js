const axios = require('axios');
const { User } = require('../db');

const createUser = async (name, email, phone) => await User.create({ name, email, phone });

const searchUserByName = () => {

}

const cleanArray = (arr) =>
    arr.map(element => {
        return {

            id: element.id,
            name: element.name,
            email: element.email,
            phone: element.phone
        }
    });


const getAllUsers = async () => {
    const databaseUsers = await User.findAll();

    const apiUsersRaw = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;

    const apiUsers = cleanArray(apiUsersRaw);

    return [...databaseUsers, ...apiUsers];
}

const getUserById = async (id, source) => {
    const user = source === 'bdd'
        ? await User.findByPk(id)
        : (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;

    return user;
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    searchUserByName
};