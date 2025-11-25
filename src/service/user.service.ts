import { AllUser, UserRepository } from "../repository/user.repository";
import { User } from "../types/user.type";

let userRepository: AllUser = new UserRepository();

export class UserService {
  getAllUsers() {
    let response = userRepository.getAllUsers();
    return response;
  }
  getUsersByID(id: string) {
    let response = userRepository.getUserByID(id);
    return response;
  }
  createUser(user: any) {
    const exist = userRepository.getUserByID(user.id);
    if (exist) {
      throw new Error("User id exists");
    }
    return userRepository.createUser(user);
  }
  deleteUser(id: string) {
    const deletedUser = userRepository.deleteUser(id);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  }
  updateUser(id: string, updatedUser: User) {
    const user = userRepository.updateUser(id, updatedUser);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
