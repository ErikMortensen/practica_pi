const getUsersHandler = (req, res) => {
    res.status(200).send('Estoy en users');
};

const getUserHandler = (req, res) => {
    res.status(200).send('Detalle del usuario');
};

const createUserHandler = (req, res) => {
    res.status(200).send('Creando un usuario');
};

module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler
};