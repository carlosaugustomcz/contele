import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase){}

    handle(request: Request, response: Response): Response{

        const user = request.body;

        this.createUserUseCase.execute(user.email, user.senha);
        
        return response.json({message: "user created"});

    }
    
}

export { CreateUserController }