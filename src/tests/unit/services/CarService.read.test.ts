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

  describe("find all cars", ()  => {
    before(() => {
      sinon.stub(carModel, "read").resolves(allCarsMockWithId);
    });

    after(() => {
      sinon.restore();
    });
    it('when there are cars, return full list', async () => {
      const allCars = await carService.findAll()

      expect(allCars).to.be.eql(allCarsMockWithId)
    })
  })

});
