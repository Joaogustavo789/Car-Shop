import IMotorcycles from '../Interfaces/IMotorcycles';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(veiculo2: IMotorcycles) {
    super(veiculo2);
    this.category = veiculo2.category;
    this.engineCapacity = veiculo2.engineCapacity;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;
