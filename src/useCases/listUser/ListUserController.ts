import { Request, Response } from "express";

import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const User = await this.listUserUseCase.execute(id);

    return response.json(User);
  }
}

export { ListUserController };
