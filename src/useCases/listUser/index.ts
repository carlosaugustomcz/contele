import { UsersRepository } from "../../repositories/UsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const usersRepository = UsersRepository.getInstance();
const lisUsersUseCase = new ListUserUseCase(usersRepository);
const listUserController = new ListUserController(lisUsersUseCase);

export { listUserController };
