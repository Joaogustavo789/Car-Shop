import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorModel from '../Models/motorcycles.model';

class MotorService {
  private motorModel = new MotorModel();

  private createMotorDomain(motors: IMotorcycle | null): Motorcycle | undefined {
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

  public async postMotorService(motors: IMotorcycle) {
    const newMotor = await this.motorModel.create(motors);
    return this.createMotorDomain(newMotor);
  }

  public async putMotorService(id: string, motors: IMotorcycle) {
    const updateMotor = await this.motorModel.update(id, motors);
    return this.createMotorDomain(updateMotor);
  }

  public async deleteMotorService(id: string) {
    const deleteMotor = await this.motorModel.delete(id);
    return this.createMotorDomain(deleteMotor);
  }
}

export default MotorService;
