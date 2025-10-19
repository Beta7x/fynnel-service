import { User } from "../../domain/user.entity";
import { IUserRepository } from "../../domain/user.repository";

export class PrismaUserRepository implements IUserRepository {
  constructor() { }

  async create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
}
