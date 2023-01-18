import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorService from '../../../src/Services/motorcycles.service';

const honda = 'Honda Cb 600f Hornet';

const motorArray = [
  {
    id: '63c80e78eeec10a1f841945a',
    model: honda,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  },
];

describe('Testes de motorcycles.', function () {
  it('Testa se lista todas as motos', async function () {
    const motorOutput2 = motorArray.map((motor) => new Motorcycle({ ...motor }));

    sinon.stub(Model, 'find').resolves(motorOutput2);

    const service2 = new MotorService();
    const result2 = await service2.getMotorService();

    expect(result2).to.be.deep.equal(motorArray);

    sinon.restore();
  });

  it('Testa se cadastra uma nova moto', async function () {
    const newMotor = {
      model: honda,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motor: IMotorcycle = {
      model: honda,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorOutput: Motorcycle = new Motorcycle(newMotor);
    sinon.stub(Model, 'create').resolves(motorOutput);

    const service2 = new MotorService();
    const result2 = await service2.postMotorService(motor);

    expect(result2).to.be.deep.equal(motorOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});
