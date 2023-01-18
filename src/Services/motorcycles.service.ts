import Motorcycle from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorModel from '../Models/motorcycles.model';

class MotorService {
  private motorModel = new MotorModel();

  private createMotorDomain(motors: IMotorcycles | null): Motorcycle | undefined {
    if (motors) {
      return new Motorcycle(motors);
    }
  }

  public async getMotorService() {
    const listMotor = await this.motorModel.find();
    const listMotorArray = listMotor.map((motor) => this.createMotorDomain(motor));
    return listMotorArray;
  }

  public async getIdMotorService(id: string) {
    const listMotorId = await this.motorModel.findById(id);
    return this.createMotorDomain(listMotorId);
  }

  public async postMotorService(motors: IMotorcycles) {
    const newMotor = await this.motorModel.create(motors);
    return this.createMotorDomain(newMotor);
  }
}

export default MotorService;
