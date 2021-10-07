import { User } from "../model/Users";


interface IUsersRepository{

    create(email: string, senha: string): void;

    list(): User[]

    findById(id: string): User

    findByEmail(email: string): User

    delete(id?: string): void

    edit(email: string, senha: string, id: string): User
}

export{ IUsersRepository }