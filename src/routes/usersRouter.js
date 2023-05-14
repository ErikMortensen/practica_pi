const { Router } = require('express');
const { getUsersHandler, getUserHandler, createUserHandler } = require('../handlers/UsersHandlers');

const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/:id', getUserHandler);

usersRouter.post('/', createUserHandler);

module.exports = usersRouter;