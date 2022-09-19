import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import CarsService from "../../../services/Car.service";
import CarController from "../../../controllers/Car.controller";
import { IRequest, IResponse } from "../../../interfaces/IController";
import {
  allCarsMockWithId,
  carMock,
  carMockUp,
  carMockWithId,
  carMockWithIdUp,
} from "../../mocks/carMock";


describe("Car Controller", () => {
  const carModel = new CarModel();
  const carService = new CarsService(carModel);
  const carController = new CarController(carService);

  const req = {} as IRequest;

  before(async () => {
    sinon.stub(carService, "create").resolves(carMockWithId);
    sinon.stub(carService, "findAll").resolves(allCarsMockWithId);
    sinon.stub(carService, "findCarById").resolves(carMockWithId);
    sinon.stub(carService, "updateCarById").resolves(carMockWithIdUp);
  });

  after(() => {
    sinon.restore();
  });

  describe("add new car", () => {
    it("when the attributes are correct a new car is returned with status 201", async () => {
      req.body = carMock;
      const newCar = await carController.create(req);

      expect(newCar).to.be.eql({ status: 201, body: carMockWithId });
    });
  });

  describe("find all cars", () => {
    it("when there are cars, return full list", async () => {
      const allCars = await carController.findAll();

      expect(allCars).to.be.eql({ status: 200, body: allCarsMockWithId });
    });
  });

  describe("find car by id", () => {
    it("when a car is found, return it", async () => {
      req.params = { id: carMockWithId._id };
      const car = await carController.findById(req);

      expect(car).to.be.eql({ status: 200, body: carMockWithId });
    });
  });

  describe("update car by id", () => {
    it("when a car is update, return it", async () => {
      req.body = carMockUp;
      req.params = { id: carMockWithId._id };
      const updatedCar = await carController.updateById(req);

      expect(updatedCar).to.be.eql({ status: 200, body: carMockWithIdUp });
    });
  });

  describe("delete car by id", () => {
    it("when a car is deleted, return it", async () => {
      req.params = { id: carMockWithId._id };
      const car = await carController.deleteById(req);

      expect(car).to.be.eql({ status: 200, body: carMockWithId });
    });
  });
});
