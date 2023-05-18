const axios = require('axios');
const { Op } = require('sequelize');
const { User, Post } = require('../db');

const createUser = async (name, email, phone) => await User.create({ name, email, phone });

const searchUserByName = async (name) => {
    const databaseUsers = await User.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            }
        }
    })
    //Busca coincidencia exacta
    // const databaseUsers = await User.findAll({
    //     where: {
    //         name: name
    //     }
    // })

    const apiUsers = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;
    // const apiUsersByName = apiUsers.filter(user => user.name === name); // cusca coincidencia exacta
    const apiUsersByName = apiUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    const apiUsersClean = cleanArray(apiUsersByName);

    return [...databaseUsers, ...apiUsersClean];
}

const cleanArray = (arr) =>
    arr.map(element => {
        return {

            id: element.id,
            name: element.name,
            email: element.email,
            phone: element.phone,
            created: false
        }
    });

const cleanObj = (obj) => {

    return {
        id: obj.id,
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        created: false
    };
}


const getAllUsers = async () => {
    const databaseUsers = await User.findAll();

    const apiUsersRaw = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;

    const apiUsers = cleanArray(apiUsersRaw);

    return [...databaseUsers, ...apiUsers];
}

const getUserById = async (id, source) => {
    const user = source === 'api'
        ? cleanObj((await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data)
        : await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ["title", "body"]
            }
        });
    return user;
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    searchUserByName
};