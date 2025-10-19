import { User } from "../domain/user.entity";
import { IUserRepository } from "../domain/user.repository";

export class GetUserUsecase {
  constructor(private userRepository: IUserRepository) { }

  async execute(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}
