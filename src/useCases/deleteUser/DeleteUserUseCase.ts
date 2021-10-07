import { AppError } from "../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";



class DeleteUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    execute(id?: string): void {

        if (id){

            const userAlreadyExits = this.usersRepository.findById(id);

             if(!userAlreadyExits) {
                 throw new AppError("User not exists!");
            
            }

            this.usersRepository.delete(id);
        } 
        else {
            this.usersRepository.delete();
        }    
    }

}

export { DeleteUserUseCase }