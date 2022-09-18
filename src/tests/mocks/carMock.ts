import { ICar, ICarDTO } from "../../interfaces/ICar";

export const carMock: ICar = {
  model: "Fusca",
  year: 1975,
  color: "White",
  buyValue: 12500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carMockWithId: ICarDTO = {
  _id: "6323cdca0e3a749e5a51f4bc",
  model: "Fusca",
  year: 1975,
  color: "White",
  buyValue: 12500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carMockWithWrongTypes = {
  model: 1975,
  year: "Fusca",
  color: 12500,
  buyValue: "immeasurable",
  doorsQty: true,
  seatsQty: true,
};

export const allCarsMock = [
  {
    model: "Fusca",
    year: 1975,
    color: "White",
    buyValue: 12500,
    doorsQty: 2,
    seatsQty: 4,
  },
  {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  },
];

