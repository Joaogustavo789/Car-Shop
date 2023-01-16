import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/cars.model';

class CarsService {
  private createCarDomain(cars: ICar | null): Car | undefined {
    if (cars) {
      return new Car(cars);
    }
  }

  public async getCarsService() {
    const carsModel2 = new CarsModel();
    const listCar = await carsModel2.getCarsModel();
    const listCarArray = listCar.map((car) => this.createCarDomain(car));
    return listCarArray;
  }

  public async getIdCarsService(id: string) {
    const carsModel3 = new CarsModel();
    const listCarId = await carsModel3.getIdCarsModel(id);
    return this.createCarDomain(listCarId);
  }

  public async postCarsService(cars: ICar) {
    const carsModel = new CarsModel();
    const newCar = await carsModel.postCarsModel(cars);
    // if (cars.id) {
    //   throw new Error(404, 'Car not found');
    // }
    // if (cars.id !== 'string') {
    //   throw new Error(422, 'Invalid mongo id');
    // }
    return this.createCarDomain(newCar);
  }
}

export default CarsService;
