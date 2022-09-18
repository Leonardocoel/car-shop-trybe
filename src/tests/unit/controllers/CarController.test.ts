import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import CarsService from "../../../services/Car.service";
import CarController from "../../../controllers/Car.controller";
import { IRequest, IResponse } from "../../../interfaces/IController";
import { carMock, carMockWithId } from "../../mocks/carMock";

describe("Car Controller", () => {
  const carModel = new CarModel();
  const carService = new CarsService(carModel);
  const carController = new CarController(carService);

  const req = {} as IRequest;
  const res = {} as IResponse;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);

    
  });

  after(() => {
    sinon.restore();
  });

  describe("add new car", () => {
    

    it("when the attributes are correct a new car is returned with status 201", async () => {
      req.body = carMock;
      const newCar = await carController.create(req);

      expect(newCar).to.be.eql({status: 201, body: carMockWithId})
    });
  });
});
