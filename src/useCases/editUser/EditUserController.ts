import { Request, Response } from "express";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  constructor(private editUserUseCase: EditUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { email, senha } = request.body;

    this.editUserUseCase.execute(id, email, senha);

    return response.json({ message: "user edited" });
  }
}

export { EditUserController };
