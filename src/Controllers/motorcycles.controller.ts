import { NextFunction, Request, Response } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorService from '../Services/motorcycles.service';

class MotorController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorService();
  }

  public async postMotorController() {
    const motors: IMotorcycles = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotor = await this.service.postMotorService(motors);
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorController;
