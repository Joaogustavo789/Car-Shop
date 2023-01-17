import { Model, Schema, model, models, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async getCarsModel(): Promise<ICar[]> {
    const carList = this.model.find();
    return carList;
  }

  public async getIdCarsModel(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  } 

  public async postCarsModel(cars: ICar): Promise<ICar> {
    return this.model.create({ ...cars });
  }

  public async putCarsModel(id: string, cars: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...cars } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}

export default CarsModel;
