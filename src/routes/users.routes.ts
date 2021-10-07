import { Router } from "express";
import { createUserController } from "../useCases/createUser";
import { listAllUserController } from "../useCases/listAllUser";





const usersRoutes = Router();


usersRoutes.post("/", (request, response) => {

  return createUserController.handle(request, response);
  

});

usersRoutes.get("/", (request, response) => {

  return listAllUserController.handle(request, response);
  

});


export { usersRoutes };