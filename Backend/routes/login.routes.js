import { Router } from 'express';
import { getLogin, signUp, deleteLogin,putLogin } from '../controllers/login.controllers.js';

const loginRouter = Router();

loginRouter.get('/login/:id', getLogin);
loginRouter.post('/login/', signUp);
loginRouter.put('/login/:id', putLogin);
loginRouter.delete('/login/:id', deleteLogin);

export default loginRouter;