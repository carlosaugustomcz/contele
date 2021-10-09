import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let deleteUserUseCase: DeleteUserUseCase;

describe("create user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to delete a user", async () => {
    const user = {
      email: "teste@teste.com.br",
      senha: "123",
    };

    createUserUseCase.execute(user.email, user.senha);

    const userCreate = usersRepositoryInMemory.findByEmail(user.email);
    deleteUserUseCase.execute(userCreate.id);

    const userDelete = usersRepositoryInMemory.findByEmail(userCreate.email);

    expect(userDelete).toBe(undefined);
  });

  it("should be able to delete all users", async () => {
    const user = {
      email: "teste@teste.com.br",
      senha: "123",
    };

    createUserUseCase.execute(user.email, user.senha);

    const userCreate = usersRepositoryInMemory.findByEmail(user.email);

    deleteUserUseCase.execute();

    const userDelete = usersRepositoryInMemory.findByEmail(userCreate.email);

    expect(userDelete).toBe(undefined);
  });
});
