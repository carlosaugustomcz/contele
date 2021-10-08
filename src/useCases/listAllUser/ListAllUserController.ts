import { Request, Response } from "express";

import { ListAllUserUseCase } from "./ListAllUserUseCase";

class ListAllUserController {
  constructor(private listAllUserUseCase: ListAllUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const allUsesr = await this.listAllUserUseCase.execute();

    return response.json(allUsesr);
  }
}

export { ListAllUserController };
