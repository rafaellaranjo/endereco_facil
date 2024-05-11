import cepRouter from '@modules/cep/routes/cep.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/cep', cepRouter);

export default routes;
