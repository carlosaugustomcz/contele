import { User } from "../model/Users";

interface IUsersRepository {
  create(email: string, senha: string): void;

  list(): User[];

  findById(id: string): User;

  findByEmail(email: string): User;

  delete(id?: string): void;

  edit(id: string, email: string, senha: string): void;
}

export { IUsersRepository };
