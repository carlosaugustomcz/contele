import { UsersRepository } from "../../repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const usersRepository = UsersRepository.getInstance()
const createUsersUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUsersUseCase);


export { createUserController }; 