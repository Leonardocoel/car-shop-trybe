import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import { Model } from "mongoose";
import {
  allCarsMockWithId,
  carMock,
  carMockUp,
  carMockWithId,
  carMockWithIdUp,
} from "../../mocks/carMock";

describe("Car Model", () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, "create").resolves(carMockWithId);
    sinon.stub(Model, "find").resolves(allCarsMockWithId);
    sinon.stub(Model, "findById").resolves(carMockWithId);
    sinon.stub(Model, "findByIdAndUpdate").resolves(carMockWithIdUp);
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
      expect(allCars).to.be.eql(allCarsMockWithId);
    });
  });

  describe("find car by id", () => {
    it("when _id is invalid, return message error", async () => {
      try {
        await carModel.readOne("invalidID");
      } catch (error: any) {
        expect(error.message).to.be.equal(
          "Id must have 24 hexadecimal characters"
        );
      }
    });

    it("when a car is found, return it", async () => {
      const car = await carModel.readOne(carMockWithId._id);
      expect(car).to.be.equal(carMockWithId);
    });
  });

  describe("update car by id", () => {
    it("when _id is invalid, return message error", async () => {
      try {
        await carModel.readOne("invalidID");
      } catch (error: any) {
        expect(error.message).to.be.equal(
          "Id must have 24 hexadecimal characters"
        );
      }
    });

    it("when a car is updated, return it", async () => {
      const car = await carModel.update(carMockWithId._id, carMockUp);
      expect(car).to.be.equal(carMockWithIdUp);
    });
  });
});
