import { ICar, ICarDTO } from "../../../../interfaces/ICar";

const carMock: ICar = {
  model: "Fusca",
  year: 1975,
  color: "White",
  buyValue: 12500,
  doorsQty: 2,
  seatsQty: 4,
};

const carMockWithId: ICarDTO = {
  _id: "6323cdca0e3a749e5a51f4bc",
  model: "Fusca",
  year: 1975,
  color: "White",
  buyValue: 12500,
  doorsQty: 2,
  seatsQty: 4,
};

export { carMock, carMockWithId };
