const { Router } = require('express');
const { getUsersHandler, getUserHandler, createUserHandler } = require('../handlers/UsersHandlers');
const validate = require('../middlewares/validate');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getUserHandler);

usersRouter.post('/', validate, createUserHandler);

module.exports = usersRouter;