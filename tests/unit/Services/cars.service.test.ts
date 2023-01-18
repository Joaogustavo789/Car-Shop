import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/cars.service';

describe('Testes de cars.', function () {
  it('Testa se cadastra um novo carro', async function () {
    const newCar = {
      model: 'Marea',
      year: 2003,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const cars: ICar = {
      model: 'Marea',
      year: 2003,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car(newCar);
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarsService();
    const result = await service.postCarsService(cars);

    expect(result).to.be.deep.equal(carOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});
