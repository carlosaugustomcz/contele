import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("create user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = {
      email: "teste@teste.com.br",
      senha: "123",
    };

    createUserUseCase.execute(user.email, user.senha);

    const userCreate = usersRepositoryInMemory.findByEmail(user.email);

    expect(userCreate).toHaveProperty("id");
  });
});
