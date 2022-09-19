import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import CarsService from "../../../services/Car.service";
import {
  allCarsMock,
  allCarsMockWithId,
  carMock,
  carMockWithId,
  carMockWithWrongTypes,
} from "../../mocks/carMock";

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarsService(carModel);

  before(() => {
    sinon.stub(carModel, "read").resolves(allCarsMockWithId);
    sinon
      .stub(carModel, "readOne")
      .onCall(0)
      .resolves(null)
      .onCall(1)
      .resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe("find all cars", () => {
    it("when there are cars, return full list", async () => {
      const allCars = await carService.findAll();

      expect(allCars).to.be.eql(allCarsMockWithId);
    });
  });

  describe("read one car", () => {
    it("when no car is found, return error message ", async () => {
      let error;
      try {
        await carService.findCarById(carMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error.message).to.be.eql("Object not found");
    });

    it("when a car is found, return it", async () => {
      const car = await carService.findCarById(carMockWithId._id)

      expect(car).to.be.eql(carMockWithId)
    });
  });
});
