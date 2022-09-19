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

  afterEach(() => {
    sinon.restore();
  });

  describe("delete car by id", () => {
    it("when no car is found, return error message ", async () => {
      const stub = sinon.stub(carModel, "delete").resolves();

      let error;
      try {
        await carService.deleteCarById(carMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error).to.be.instanceOf(CustomError);
      expect(error.httpStatus).to.be.equal(404);
      expect(error.message).to.be.eql("Object not found");
    });
    it("when a car is deleted, return it", async () => {
      const deleteStub = sinon.stub(carModel, "delete").resolves(carMockWithId);
      await carService.deleteCarById(carMockWithId._id);

      expect(deleteStub.calledWith(carMockWithId._id)).to.be.true;
      
    });
  });
});
