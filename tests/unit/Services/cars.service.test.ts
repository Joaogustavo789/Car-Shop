import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/cars.service';
import Connection from '../../../src/Models/Connection';

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
    await Connection();
    const carsOutput2 = carsArray.map((car) => new Car({ ...car }));

    sinon.stub(Model, 'find').resolves(carsOutput2);

    const service2 = new CarsService();
    const result2 = await service2.getCarsService();

    expect(result2).to.be.deep.equal(carsArray);

    sinon.restore();
  });

  it('Testa se lista um carro através do id', async function () {
    const carId = {
      id: '63c82147eeec10a1f8419461',
      model: 'Marea',
      year: 2003,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findById').resolves(carId);

    const service2 = new CarsService();
    const result2 = await service2.getIdCarsService('63c82147eeec10a1f8419461');

    expect(result2).to.be.deep.equal(carId);
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

  it('Testa se atualiza um carro através do id.', async function () {
    const carsUp: ICar = {
      id: '63c957ccc4fc63d623668892',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(carsUp);

    const service3 = new CarsService();
    const result3 = await service3.putCarsService('63c957ccc4fc63d623668892', carsUp);

    expect(result3).to.be.deep.equal(carsUp);
  });

  // it('Testa se deleta um carro através do id.', async function () {
  //   sinon.stub(Model, 'findByIdAndDelete').resolves('63c957ccc4fc63d623668892');

  //   const service4 = new CarsService();
  //   const result4 = await service4.deleteCarsService('63c957ccc4fc63d623668892');

  //   expect(result4).to.be.deep.equal(null);
  // });

  afterEach(function () {
    sinon.restore();
  });
});
