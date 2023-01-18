import { Router } from 'express';
import MotorController from '../Controllers/motorcycles.controller';

const motoRouter = Router();

motoRouter.get('/', (req, res, next) => new MotorController(req, res, next).getMotorController());

motoRouter.get('/:id', (req, res, next) => new MotorController(req, res, next).getIdMoController());

motoRouter.post('/', (req, res, next) => new MotorController(req, res, next).postMotorController());

export default motoRouter;
