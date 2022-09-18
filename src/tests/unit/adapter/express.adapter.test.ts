import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import { Request, Response } from 'express';
import CarControllerFactory from "../../../factories/CarController.factory";
import { carMock, carMockWithId } from "../../mocks/carMock";
import ExpressAdapter from "../../../adapters/expressjs/express.adapter";

describe("Express adapter", () => {
  const carController = CarControllerFactory.make()

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carController, 'create').resolves({status: 201, body: carMockWithId })

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

    it("adapt controller to expressjs returning the correct response", async () => {
      req.body = carMock;
      const newCar = await ExpressAdapter.adapt(carController, 'create')(req, res)

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
 
});
