import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/cars.service';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async getCarsController() {
    const listCar = await this.service.getCarsService();
    return this.res.status(200).json(listCar);
  }

  public async getIdCarController() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const listCarId = await this.service.getIdCarsService(id);
    if (!listCarId) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(listCarId);
  }

  public async postCarsController() {
    const cars: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.postCarsService(cars);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;
