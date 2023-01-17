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
    const listCar = await this.carsModel.getCarsModel();
    const listCarArray = listCar.map((car) => this.createCarDomain(car));
    return listCarArray;
  }

  public async getIdCarsService(id: string) {
    const listCarId = await this.carsModel.getIdCarsModel(id);
    // if (cars.id) {
    //   throw new Error(404, 'Car not found');
    // }
    // if (cars.id !== 'string') {
    //   throw new Error(422, 'Invalid mongo id');
    // }
    return this.createCarDomain(listCarId);
  }

  public async postCarsService(cars: ICar) {
    const newCar = await this.carsModel.postCarsModel(cars);
    return this.createCarDomain(newCar);
  }

  public async putCarsService(id: string, cars: ICar) {
    const carUpdate = await this.carsModel.putCarsModel(id, cars);
    return this.createCarDomain(carUpdate);
  }
}

export default CarsService;
