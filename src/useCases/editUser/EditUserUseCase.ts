import { AppError } from "../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class EditUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(id: string, email: string, senha: string): void {
    const userAlreadyExits = this.usersRepository.findById(id);

    if (!userAlreadyExits) {
      throw new AppError("User not exists!");
    }

    this.usersRepository.delete(id);

    this.usersRepository.edit(id, email, senha);
  }
}

export { EditUserUseCase };
