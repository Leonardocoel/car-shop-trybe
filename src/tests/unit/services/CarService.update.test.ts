import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import CarsService from "../../../services/Car.service";
import { carMockUp, carMockWithId, carMockWithIdUp } from "../../mocks/carMock";

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarsService(carModel);

  before(() => {
    sinon.stub(carModel, "update").resolves(carMockWithIdUp);
  });

  after(() => {
    sinon.restore();
  });

  describe("update car by id", () => {
    it("when a car is updated, return it", async () => {
      const car = await carService.updateCarById(carMockWithId._id, carMockUp);

      expect(car).to.be.eql(carMockWithIdUp);
    });
  });
});
