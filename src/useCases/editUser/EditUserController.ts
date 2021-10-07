import { Request, Response } from "express";
import { EditUserUseCase } from "./EditUserUseCase";


class CreateUserController {

    constructor(private editUserUseCase: EditUserUseCase){}

    handle(request: Request, response: Response): Response{

        const userId = request.params;
        const user = request.body;

        this.editUserUseCase.execute(userId.Id, user.email, user.senha);
        
        return response.json({message: "user edited"});

    }
    
}

export { CreateUserController }