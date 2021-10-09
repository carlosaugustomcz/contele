import { User } from "../../model/Users";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(email: string, senha: string): Promise<User> {
    const user = new User();
    const id = "123";

    Object.assign(user, {
      id,
      email,
      senha,
    });

    this.users.push(user);

    return user;
  }

  list(): User[] {
    throw new Error("Method not implemented.");
  }

  findById(id: string): User {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

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
    throw new Error("Method not implemented.");
  }
}

export { UsersRepositoryInMemory };
