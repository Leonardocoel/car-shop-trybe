import { ICar, ICarDTO } from "../../interfaces/ICar";

export const carMock: ICar = {
  model: "Fusca",
  year: 1975,
  color: "White",
  buyValue: 12500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carMockUp: ICar = {
  model: "Fusca AZUL",
  year: 1975,
  color: "Blue",
  buyValue: 15000,
  doorsQty: 2,
  seatsQty: 4,
}

export const carMockWithId: ICarDTO = {
  _id: "6323cdca0e3a749e5a51f4bc",
  model: "Fusca",
  year: 1975,
  color: "White",
  buyValue: 12500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carMockWithIdUp: ICarDTO = {
  _id: "6323cdca0e3a749e5a51f4bc",
  model: "Fusca AZUL",
  year: 1975,
  color: "Blue",
  buyValue: 15000,
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

export const allCarsMock: ICar[] = [
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

export const allCarsMockWithId: ICarDTO[] = [
  {
    _id: "6323cdca0e3a749e5a51f4bc",
    model: "Fusca",
    year: 1975,
    color: "White",
    buyValue: 12500,
    doorsQty: 2,
    seatsQty: 4,
  },
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  },
];
