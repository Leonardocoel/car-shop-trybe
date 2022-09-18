import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import { Model } from "mongoose";
import { allCarsMock, carMock, carMockWithId } from "../../mocks/carMock";

describe("Car Model", () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, "create").resolves(carMockWithId);
    sinon.stub(Model, "find").resolves(allCarsMock)
  });

  after(() => {
    sinon.restore();
  });

  describe("add new car", () => {
    it("when the attributes are correct a new car is returned", async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.eql(carMockWithId);
    });
  });

  describe("find all cars", () => {
    it("when there are cars, return full list", async () => {
      const allCars = await carModel.read();
      expect(allCars).to.be.eql(allCarsMock)
    });
  });
});
