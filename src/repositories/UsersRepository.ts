import { v4 as uuidV4 } from "uuid";

import { User } from "../model/Users";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create(email: string, senha: string): void {
    const user = new User();
    const id = uuidV4();

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
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  delete(id?: string): void {
    if (id) {
      const index = this.users.findIndex((user) => user.id === id);

      this.users.splice(index, 1);
    } else {
      this.users.splice(0);
    }
  }

  edit(id: string, email: string, senha: string): void {
    const user = new User();

    Object.assign(user, {
      id,
      email,
      senha,
    });

    this.users.push(user);
  }
}

export { UsersRepository };
