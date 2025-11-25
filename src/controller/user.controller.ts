import z from "zod";
import { Request, Response } from "express";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dtos";
import { UserService } from "../service/user.service";

let userService: UserService = new UserService();
export class UserController {
  createUser = (req: Request, res: Response) => {
    try {
      const parsedData: CreateUserDTO = CreateUserDTO.parse(req.body);
      const newUser = userService.createUser(parsedData);
      return res.status(201).json(newUser);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error });
      }
      return res.status(400).json({ error: error.message });
    }
  };
  getAllUsers = (req: Request, res: Response) => {
    const users = userService.getAllUsers();
    return res.json(users);
  };
  getUserbyID(req: Request, res: Response) {
    try {
      const user = userService.getUsersByID(req.params.id);
      return res.json(user);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }
  updateUser(req: Request, res: Response) {
    try {
      const parsedData: UpdateUserDTO = UpdateUserDTO.parse(req.body);
      const updatedUser = userService.updateUser(req.params.id, parsedData);
      return res.json(updatedUser);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error });
      }
      return res.status(404).json({ error: error.message });
    }
  }
  deleteUser(req: Request, res: Response) {
    try {
      userService.deleteUser(req.params.id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  }
}
