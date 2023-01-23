import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/cars.service';

const invalidMongo = 'Invalid mongo id';

const carNotFound = 'Car not found';

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
      return this.res.status(422).json({ message: invalidMongo });
    }
    const listCarId = await this.service.getIdCarsService(id);
    if (!listCarId) {
      return this.res.status(404).json({ message: carNotFound });
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

  public async putCarsController() {
    const cars: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: invalidMongo });
    }
    const updateCar = await this.service.putCarsService(id, cars);
    if (!updateCar) {
      return this.res.status(404).json({ message: carNotFound });
    }
    return this.res.status(200).json(updateCar);
  }

  public async delCarControl() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: invalidMongo });
    }
    const deleteCar = await this.service.deleteCarsService(id);
    if (!deleteCar) {
      return this.res.status(404).json({ message: carNotFound });
    }
    return this.res.status(204).end();
  }
}

export default CarsController;
