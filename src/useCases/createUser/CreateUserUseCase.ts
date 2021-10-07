import { AppError } from "../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";



class CreateUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    execute(email: string, senha: string): void {

        console.log(email, senha);

        const userAlreadyExits = this.usersRepository.findByEmail(email);

         if(userAlreadyExits) {
             throw new AppError("User already exists!");
            
        }

        this.usersRepository.create(email, senha);

    }

}

export { CreateUserUseCase }