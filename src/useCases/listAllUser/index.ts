import { UsersRepository } from "../../repositories/UsersRepository";
import { ListAllUserController } from "./ListAllUserController";
import { ListAllUserUseCase } from "./ListAllUserUseCase";

const usersRepository = UsersRepository.getInstance();
const lisAllUsersUseCase = new ListAllUserUseCase(usersRepository);
const listAllUserController = new ListAllUserController(lisAllUsersUseCase);

export { listAllUserController };
