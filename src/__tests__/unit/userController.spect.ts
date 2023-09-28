import { Request, Response } from "express";
import EStatusReturn from "../../types/statusReturn";
import { add, get } from "../../adapters/userAdapt";
import { addOne, getOne, test } from "../../controllers/userController";

jest.mock("../../adapters/userAdapt");
jest.mock("../../helpers/tools");

describe("UserController", () => {
  describe("addOne", () => {
    it("should add a new user", async () => {
      const req: Request = {
        query: {
          email: "test@example.com",
          password: "123456",
          confirmepassword: "123456",
        },
      } as unknown as Request;
      const res: Response = {
        send: jest.fn(),
      } as unknown as Response;

      const addMock = add as jest.Mock;
      addMock.mockResolvedValue({
        status: true,
        message: "User added successfully",
        data: { id: 1, email: "test@example.com" },
      });

      await addOne(req, res);

      expect(addMock).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "123456",
        confirmepassword: "123456",
      });

      expect(res.send).toHaveBeenCalledWith({
        data: JSON.stringify({ id: 1, email: "test@example.com" }),
        message: "Usuário adicionado!",
        status: EStatusReturn.Success,
      });
    });

    it("should handle invalid data", async () => {
      const req: Request = {} as Request;
      const res: Response = {
        send: jest.fn(),
      } as unknown as Response;

      await addOne(req, res);

      expect(res.send).toHaveBeenCalledWith({
        data: [],
        message: "Dados inválidos!",
        status: EStatusReturn.Error,
      });
    });

    it("should handle add error", async () => {
      const req: Request = {
        query: {
          email: "test@example.com",
          password: "123456",
          confirmepassword: "123456",
        },
      } as unknown as Request;
      const res: Response = {
        send: jest.fn(),
      } as unknown as Response;

      const addMock = add as jest.Mock;
      addMock.mockResolvedValue({
        status: false,
        message: "Error adding user",
        data: {},
      });

      await addOne(req, res);

      expect(res.send).toHaveBeenCalledWith({
        data: [],
        message: "Error adding user",
        status: EStatusReturn.Error,
      });
    });
  });

  describe("getOne", () => {
    it("should get a user by ID", async () => {
      const req: Request = {
        query: {
          _id: "1",
        },
      } as unknown as Request;
      const res: Response = {
        send: jest.fn(),
      } as unknown as Response;

      const getMock = get as jest.Mock;
      getMock.mockResolvedValue({
        status: true,
        message: "User found",
        data: { id: 1, email: "test@example.com" },
      });

      await getOne(req, res);

      expect(getMock).toHaveBeenCalledWith("1");

      expect(res.send).toHaveBeenCalledWith({
        data: JSON.stringify({
          status: true,
          message: "User found",
          data: { id: 1, email: "test@example.com" },
        }),
        message: "Usuário encontrado!",
        status: EStatusReturn.Success,
      });
    });

    it("should handle invalid parameter", async () => {
      const req: Request = {} as Request;
      const res: Response = {
        send: jest.fn(),
      } as unknown as Response;

      await getOne(req, res);

      expect(res.send).toHaveBeenCalledWith({
        data: [],
        message: "Parâmetro inválido!",
        status: EStatusReturn.Error,
      });
    });
  });

  describe("test", () => {
    it("should return a success message", async () => {
      const req: Request = {} as Request;
      const res: Response = {
        send: jest.fn(),
      } as unknown as Response;

      await test(req, res);

      expect(res.send).toHaveBeenCalledWith({
        message: "Teste realizado com sucesso!",
        status: EStatusReturn.Success,
      });
    });
  });
});
