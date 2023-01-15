import { Router } from 'express';
import CarsController from '../Controllers/cars.controller';

const carsRouter = Router();

carsRouter.post('/', (req, res, next) => new CarsController(req, res, next).postCarsController());

export default carsRouter;
