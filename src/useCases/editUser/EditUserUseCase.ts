import { AppError } from "../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";



class EditUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    execute(id: string, email: string, senha: string): void {

        const userAlreadyExits = this.usersRepository.findByEmail(email);

         if(userAlreadyExits) {
             throw new AppError("User already exists!");
            
        }

        this.usersRepository.create(email, senha);

    }

}

export { EditUserUseCase }