import { User } from "../domain/user.entity";
import { IUserRepository } from "../domain/user.repository";

export class CreateUserUsecase {
  constructor(private userRepository: IUserRepository) { }

  async execute(name: string, email: string): Promise<User> {
    const user = new User(crypto.randomUUID(), name, email);
    return this.userRepository.create(user);
  }
}

