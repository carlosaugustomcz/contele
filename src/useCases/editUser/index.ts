import { UsersRepository } from "../../repositories/UsersRepository";
import { EditUserController } from "./EditUserController";
import { EditUserUseCase } from "./EditUserUseCase";

const usersRepository = UsersRepository.getInstance()
const editUsersUseCase = new EditUserUseCase(usersRepository);
const editUserController = new EditUserController(editUsersUseCase);


export { editUserController }; 