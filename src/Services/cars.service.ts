import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/cars.model';

class CarsService {
  private createCarDomain(cars: ICar | null): Car | undefined {
    if (cars) {
      return new Car(cars);
    }
  }

  public async postCarsService(cars: ICar) {
    const carsModel = new CarsModel();
    const newCar = await carsModel.postCarsModel(cars);
    return this.createCarDomain(newCar);
  }
}

export default CarsService;
