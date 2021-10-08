import { UsersRepository } from "../../repositories/UsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const usersRepository = UsersRepository.getInstance();
const deleteUsersUseCase = new DeleteUserUseCase(usersRepository);
const deleteUserController = new DeleteUserController(deleteUsersUseCase);

export { deleteUserController };
