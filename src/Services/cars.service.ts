import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/cars.model';

class CarsService {
  private carsModel = new CarsModel();

  private createCarDomain(cars: ICar | null): Car | undefined {
    if (cars) {
      return new Car(cars);
    }
  }

  public async getCarsService() {
    const listCar = await this.carsModel.find();
    const listCarArray = listCar.map((car) => this.createCarDomain(car));
    return listCarArray;
  }

  public async getIdCarsService(id: string) {
    const listCarId = await this.carsModel.findById(id);
    // if (cars.id) {
    //   throw new Error(404, 'Car not found');
    // }
    // if (cars.id !== 'string') {
    //   throw new Error(422, 'Invalid mongo id');
    // }
    return this.createCarDomain(listCarId);
  }

  public async postCarsService(cars: ICar) {
    const newCar = await this.carsModel.create(cars);
    return this.createCarDomain(newCar);
  }

  public async putCarsService(id: string, cars: ICar) {
    const carUpdate = await this.carsModel.update(id, cars);
    return this.createCarDomain(carUpdate);
  }

  // public async deleteCarsService(id: string) {
  //   const deleteCar = await this.carsModel.delete(id);
  //   return this.createCarDomain(deleteCar);
  // }
}

export default CarsService;

// import { Schema } from 'mongoose';
// import ICar from '../Interfaces/ICar';
// import AbstractODM from './AbstractODM';

// class CarsModel extends AbstractODM<ICar> {
//   constructor() {
//     const schema = new Schema<ICar>({
//       model: { type: String, required: true },
//       year: { type: Number, required: true },
//       color: { type: String, required: true },
//       status: { type: Boolean, required: false },
//       buyValue: { type: Number, required: true },
//       doorsQty: { type: Number, required: true },
//       seatsQty: { type: Number, required: true },
//     });
//     super(schema, 'Car');
//   }
// }

// export default CarsModel;