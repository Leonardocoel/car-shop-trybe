import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import { Model } from "mongoose";
import { allCarsMockWithId, carMock, carMockWithId } from "../../mocks/carMock";

describe("Car Model", () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, "create").resolves(carMockWithId);
    sinon.stub(Model, "find").resolves(allCarsMockWithId);
    sinon.stub(Model, 'findById').resolves(carMockWithId);
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
      expect(allCars).to.be.eql(allCarsMockWithId)
    });
  });

  describe('find car by id', () => {
    it('when _id is invalid, return message error',async () => {
      try {
        await carModel.readOne('invalidID');
      } catch (error: any) {
        expect(error.message).to.be.equal('Id must have 24 hexadecimal characters')
      }
    });

    it('when car is found, return it', async () => {
      const car = await carModel.readOne('6323cdca0e3a749e5a51f4bc')
      expect(car).to.be.equal(carMockWithId)
    })
  })
});
