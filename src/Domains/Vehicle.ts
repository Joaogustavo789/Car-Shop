import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(veiculo3: IVehicle) {
    this.id = veiculo3.id;
    this.model = veiculo3.model;
    this.year = veiculo3.year;
    this.color = veiculo3.color;
    this.status = veiculo3.status || false;
    this.buyValue = veiculo3.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}

export default Vehicle;
