import { Router } from 'express';
import MotorController from '../Controllers/motorcycles.controller';

const motoRouter = Router();

motoRouter.post('/', (req, res, next) => new MotorController(req, res, next).postMotorController());

export default motoRouter;
