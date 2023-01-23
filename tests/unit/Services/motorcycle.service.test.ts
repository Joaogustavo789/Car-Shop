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

  it('Testa se lista uma moto através do id', async function () {
    const motorId = {
      id: '63c82017eeec10a1f841945e',
      model: honda,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(motorId);

    const service2 = new MotorService();
    const result2 = await service2.getIdMotorService('63c82017eeec10a1f841945e');

    expect(result2).to.be.deep.equal(motorId);
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

  it('Testa se atualiza uma moto através do id.', async function () {
    const motorsUp: IMotorcycle = {
      id: '63c958b1c4fc63d623668894',
      model: honda,
      year: 2007,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorsUp);

    const service3 = new MotorService();
    const result3 = await service3.putMotorService('63c958b1c4fc63d623668894', motorsUp);

    expect(result3).to.be.deep.equal(motorsUp);
  });

  // it('Testa se deleta uma moto através do id.', async function () {
  //   sinon.stub(Model, 'findByIdAndDelete').resolves('63c958b1c4fc63d623668894');

  //   const service3 = new MotorService();
  //   const result3 = await service3.deleteMotorService('63c958b1c4fc63d623668894');

  //   expect(result3).to.be.deep.equal(null);
  // });

  afterEach(function () {
    sinon.restore();
  });
});
