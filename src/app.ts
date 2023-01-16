import express from 'express';
// import ErrorMiddleware from './Middlewares/ErrorMiddleware';
import routers from './routes/routes';

const app = express();

app.use(express.json());
app.use(routers);
// app.use(ErrorMiddleware.change);

export default app;
