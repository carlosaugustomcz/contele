import { User } from "../../model/Users";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class ListAllUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    async execute(): Promise<User[]> {

        const users  = await this.usersRepository.list();
              
        return users;
    
    };


};




export { ListAllUserUseCase }