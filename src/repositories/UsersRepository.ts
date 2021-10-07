import { User } from "../model/Users";
import { IUsersRepository } from "./IUsersRepository";

import {v4 as uuidV4, v4} from "uuid"
import { AppError } from "../errors/AppError";


class UsersRepository implements IUsersRepository {

    private users: User[];
    private static INSTANCE: UsersRepository;

    private constructor(){
        this.users = [];
        
    }

    findByEmail(email: string): User {

        const user = this.users.find((user) => user.email === email);

       
        return user;

    }

    public static getInstance(): UsersRepository{
        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create(email: string, senha: string): void {

        const user = new User();
        const id = uuidV4()
        
        Object.assign(user, {
            id,
            email,
            senha,
        });

          
        this.users.push(user);
    }
    

    list(): User[] {

        const all = this.users;

        return all;

    }

    findById(id: string): User {
        throw new Error("Method not implemented.");
    }

    delete(id?: string): void {
        throw new Error("Method not implemented.");
    }

    edit(email: string, senha: string, id: string): User {
        throw new Error("Method not implemented.");
    }


}

export { UsersRepository }