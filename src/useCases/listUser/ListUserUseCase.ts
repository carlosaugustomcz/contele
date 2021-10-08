import { User } from "../../model/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    const user = this.usersRepository.findById(id);

    return user;
  }
}

export { ListUserUseCase };
