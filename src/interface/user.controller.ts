import { Request, Response } from "express";
import { container } from "../infrastructure/dependency/container";
import { CreateUserUsecase } from "../application/create-user.usecase";
import { logger } from "../infrastructure/logger/logger";

export class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const useCase = container.resolve(CreateUserUsecase);
      const user = await useCase.execute(name, email);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
    } catch (error) {
    }
  }

  static async list(_req: Request, res: Response) {
    try {
      logger.info("Request masuk ke /users");
      res.json({ message: "Hello word" });
    } catch (error) {
      res.json(500).json({ error: (error as Error).message });
    }
  }
}
