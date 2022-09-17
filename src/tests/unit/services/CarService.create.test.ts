import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;

import CarModel from "../../../models/Car";
import CarsService from "../../../services/Car.service";
import {
  carMock,
  carMockWithId,
  carMockWithWrongTypes,
} from "../../mocks/carMock";
import { CustomError } from "../../../errors";
import { ZodError } from "zod";

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarsService(carModel);

  describe("add new car", () => {
    describe("Failures", () => {
      before(() => {
        sinon.stub(carModel, "create").resolves();
      });

      after(() => {
        sinon.restore();
      });

      it("when the object passed is empty, it returns status 400 and the error message ", async () => {
        let error;
        try {
          await carService.create({} as any);
        } catch (err: any) {
          error = err;
        }
        expect(error).to.be.instanceOf(CustomError);
        expect(error.httpStatus).to.be.equal(400);
        expect(error.message).to.be.equal("Fields cannot be empty");
      });

      it("when the model or color has less than 3 characters,  it return the error message", async () => {
        let error;
        try {
          await carService.create({ ...carMock, model: "fu", color: "wh" });
        } catch (err: any) {
          error = err;
        }

        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal(
          "Should be at least 3 characters"
        );
        expect(error.issues[1].message).to.be.equal(
          "Should be at least 3 characters"
        );
      });

      it("when the year is less than 1900, it return the error message", async () => {
        let error;
        try {
          await carService.create({ ...carMock, year: 1899 });
        } catch (err: any) {
          error = err;
        }

        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal(
          "Value should be greater than or equal to 1900"
        );
      });

      it("when the year is greater than 2022, it return the error message", async () => {
        let error;
        try {
          await carService.create({ ...carMock, year: 2023 });
        } catch (err: any) {
          error = err;
        }

        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal(
          "Value should be less than or equal to 2022"
        );
      });

      it("when the number of seats or doors is less than 2, it return the error message ", async () => {
        let error;
        try {
          await carService.create({ ...carMock, seatsQty: 1, doorsQty: 1 });
        } catch (err: any) {
          error = err;
        }
        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal(
          "Value should be greater than or equal to 2"
        );
        expect(error.issues[1].message).to.be.equal(
          "Value should be greater than or equal to 2"
        );
      });

      it("when the number of seats is more than 7, it return the error message ", async () => {
        let error;
        try {
          await carService.create({ ...carMock, seatsQty: 8 });
        } catch (err: any) {
          error = err;
        }
        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal(
          "Value should be less than or equal to 7"
        );
      });

      it("when the number of doors is more than 4, it return the error message ", async () => {
        let error;
        try {
          await carService.create({ ...carMock, doorsQty: 5 });
        } catch (err: any) {
          error = err;
        }

        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal(
          "Value should be less than or equal to 4"
        );
      });

      it("when one of the attributes is missing, it returns the error message", async () => {
        let error;
        try {
          await carService.create({status: true} as any);
        } catch (err: any) {
          error = err;
        }

        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal("model is required");
        expect(error.issues[1].message).to.be.equal("year is required");
        expect(error.issues[2].message).to.be.equal("color is required");
        expect(error.issues[3].message).to.be.equal("buyValue is required");
        expect(error.issues[4].message).to.be.equal("doorsQty is required");
        expect(error.issues[5].message).to.be.equal("seatsQty is required");
      });
      

      it("when when one of the attributes are with wrong types, it return the error message ", async () => {
        let error;
        try {
          await carService.create(carMockWithWrongTypes as any);
        } catch (err: any) {
          error = err;
        }

        expect(error).to.be.instanceOf(ZodError);
        expect(error.issues[0].message).to.be.equal("Expected string, received number");
        expect(error.issues[1].message).to.be.equal("Expected number, received string");
        expect(error.issues[2].message).to.be.equal("Expected string, received number");
        expect(error.issues[3].message).to.be.equal("Expected number, received string");
        expect(error.issues[4].message).to.be.equal("Expected number, received boolean");
        expect(error.issues[5].message).to.be.equal("Expected number, received boolean");
      });
    });

    describe("Sucess", () => {
      before(() => {
        sinon.stub(carModel, "create").resolves(carMockWithId);
      });

      after(() => {
        sinon.restore();
      });

      it("when the attributes are correct a new car is returned", async () => {
        const newCar = await carService.create(carMock);

        expect(newCar).to.be.eql(carMockWithId)
      });
    });
  });
});
