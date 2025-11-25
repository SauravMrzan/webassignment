import {z} from "zod";
export const UserSchema = z.object({
    id: z.string().min(1,"User id is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().min(1,"Must contail @gmail.com"),
    name:z.string().min(1,"Full name"),
    age:z.number().min(1,"Enter your age"),
});
export type User = z.infer<typeof UserSchema>
