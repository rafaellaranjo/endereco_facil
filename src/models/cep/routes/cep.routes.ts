import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CepController from '../controllers/CepController';

const cepRouter = Router();
const cepController = new CepController();

cepRouter.get(
  '/:cep',
  celebrate({
    [Segments.PARAMS]: {
      cep: Joi.string().required(),
    },
  }),
  cepController.list,
);

export default cepRouter;
