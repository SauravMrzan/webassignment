import z from "zod";
import { UserSchema } from "../types/user.type";

export const CreateUserDTO = UserSchema.pick({
  id: true,
  username: true,
  email: true,
  name: true,
  age: true,
});
export type CreateUserDTO = z.infer<typeof CreateUserDTO>;


export const UpdateUserDTO = UserSchema.omit({ id: true});
export type UpdateUserDTO = z.infer<typeof UpdateUserDTO>;