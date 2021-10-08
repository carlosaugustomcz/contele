import { Router } from "express";
import { createUserController } from "../useCases/createUser";
import { listAllUserController } from "../useCases/listAllUser";
import { listUserController } from "../useCases/listUser";
import { deleteUserController } from "../useCases/deleteUser";
import { editUserController } from "../useCases/editUser";


const usersRoutes = Router();


usersRoutes.post("/", (request, response) => {

  return createUserController.handle(request, response);
  
});

usersRoutes.get("/", (request, response) => {

  return listAllUserController.handle(request, response);
  
});

usersRoutes.get("/:id", (request, response) => {

  return listUserController.handle(request, response);
  
});

usersRoutes.put("/:id", (request, response) => {

  return editUserController.handle(request, response);
})

usersRoutes.delete("/:id", (request, response) => {

  return deleteUserController.handle(request, response);
})

usersRoutes.delete("/", (request, response) => {

  return deleteUserController.handle(request, response);
})

export { usersRoutes };