import { Router } from 'express';
import CarsController from '../Controllers/cars.controller';

const carsRouter = Router();

carsRouter.get('/', (req, res, next) => new CarsController(req, res, next).getCarsController());

carsRouter.get('/:id', (req, res, next) => new CarsController(req, res, next).getIdCarController());

carsRouter.post('/', (req, res, next) => new CarsController(req, res, next).postCarsController());

carsRouter.put('/:id', (req, res, next) => new CarsController(req, res, next).putCarsController());

carsRouter.delete('/:id', (req, res, next) => new CarsController(req, res, next).delCarControl());

export default carsRouter;
