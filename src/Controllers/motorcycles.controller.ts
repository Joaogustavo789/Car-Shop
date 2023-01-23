import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorService from '../Services/motorcycles.service';

const invalidMongo2 = 'Invalid mongo id';

const motorNotFound = 'Motorcycle not found';

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

  public async getMotorController() {
    const listMotor = await this.service.getMotorService();
    return this.res.status(200).json(listMotor);
  }

  public async getIdMoController() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: invalidMongo2 });
    }
    const listMotorId = await this.service.getIdMotorService(id);
    if (!listMotorId) {
      return this.res.status(404).json({ message: motorNotFound });
    }
    return this.res.status(200).json(listMotorId);
  }

  public async postMotorController() {
    const motors: IMotorcycle = {
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

  public async putMotoController() {
    const motors: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: invalidMongo2 });
    }

    const updateMotor = await this.service.putMotorService(id, motors);
    if (!updateMotor) {
      return this.res.status(404).json({ message: motorNotFound });
    }
    return this.res.status(200).json(updateMotor);
  }

  public async delMotoControl() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: invalidMongo2 });
    }
    const deleteMotor = await this.service.deleteMotorService(id);
    if (!deleteMotor) {
      return this.res.status(404).json({ message: motorNotFound });
    }
    return this.res.status(204).end();
  }
}

export default MotorController;
