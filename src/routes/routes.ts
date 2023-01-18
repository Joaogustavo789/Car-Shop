import { Router } from 'express';
import carsRouter from './cars.routes';
import motoRouter from './motorcycles.routes';

const routers = Router();

routers.use('/cars', carsRouter);

routers.use('/motorcycles', motoRouter);

export default routers;
