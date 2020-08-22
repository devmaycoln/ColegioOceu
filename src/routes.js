// o código deve ser conforme as 2 linhas abaixo:
// const { Router } = require('express');
// o {} é a forma desconstruída de instanciar o objeto

import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// O Comando abaixo serve para somente acessar as rotas abaixo dele, se o usuário tiver autenticado.
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

// Chamada teste para url default retornar a criação do usuário abaixo
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Maycoln Araujo',
//     email: 'maycoln.araujo@gmail.com',
//     password_hash: '1423lkj14',
//   });

//   return res.json(user);
// });

// Substituido pela linha subsequente depois da importacao do sucrase
// module.exports = routes;
export default routes;
