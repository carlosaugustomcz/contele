import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { EditUserUseCase } from "./EditUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

let editUserUseCase: EditUserUseCase;

describe("edit user", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    editUserUseCase = new EditUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to edit a user", async () => {
    const user = {
      email: "teste@teste.com.br",
      senha: "123",
    };

    createUserUseCase.execute(user.email, user.senha);

    editUserUseCase.execute("123", user.email, user.senha);

    const userEdit = usersRepositoryInMemory.findById("123");

    expect(userEdit.id).toBe("123");
  });
});
