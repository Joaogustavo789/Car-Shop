import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/cars.service';

const carsArray = [
  {
    id: '63c75d7583a096c16fa5df11',
    model: 'Marea',
    year: 2003,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

describe('Testes de cars.', function () {
  it('Testa se lista todos os carros', async function () {
    const carsOutput2 = carsArray.map((car) => new Car({ ...car }));

    sinon.stub(Model, 'find').resolves(carsOutput2);

    const service2 = new CarsService();
    const result2 = await service2.getCarsService();

    expect(result2).to.be.deep.equal(carsArray);

    sinon.restore();
  });

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

  // it('Testa se atualiza os carros', function () {

  // });

  afterEach(function () {
    sinon.restore();
  });
});
