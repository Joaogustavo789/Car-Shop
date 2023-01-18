import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorService from '../../../src/Services/motorcycles.service';

describe('Testes de motorcycles.', function () {
  it('Testa se cadastra uma nova moto', async function () {
    const newMotor = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motor: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
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
