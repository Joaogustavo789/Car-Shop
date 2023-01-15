import { Router } from 'express';
import carsRouter from './cars.routes';

const routers = Router();

routers.use('/cars', carsRouter);

export default routers;
