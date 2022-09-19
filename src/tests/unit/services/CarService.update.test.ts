import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import CarsService from "../../../services/Car.service";
import { carMockUp, carMockWithId, carMockWithIdUp } from "../../mocks/carMock";
import { CustomError } from "../../../errors";

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarsService(carModel);

  before(() => {
    sinon
      .stub(carModel, "update")
      .onCall(0)
      .resolves(null)
      .onCall(1)
      .resolves(carMockWithIdUp);
  });

  after(() => {
    sinon.restore();
  });

  describe("update car by id", () => {

    it("when the object passed is empty, it returns status 400 and the error message ", async () => {
      let error;
      try {
        await carService.updateCarById(carMockWithId._id, {} as any);
      } catch (err: any) {
        error = err;
      }
      expect(error).to.be.instanceOf(CustomError);
      expect(error.httpStatus).to.be.equal(400);
      expect(error.message).to.be.equal("Fields cannot be empty");
    });

    it("when no car is found, return error message ", async () => {
      let error;
      try {
        await carService.updateCarById(carMockWithId._id, carMockUp);
      } catch (err: any) {
        error = err;
      }
      
      expect(error).to.be.instanceOf(CustomError);
      expect(error.httpStatus).to.be.equal(404);
      expect(error.message).to.be.eql("Object not found");
    });
    it("when a car is updated, return it", async () => {
      const car = await carService.updateCarById(carMockWithId._id, carMockUp);

      expect(car).to.be.eql(carMockWithIdUp);
    });
  });
});
