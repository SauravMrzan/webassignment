import { User } from "../types/user.type";

// In-memory storage -
let users: User[] = [
  {
    id: "user1",
    username: "john_doe",
    email: "john@example.com",
    name: "John Doe",
    age: 30,
  },
  {
    id: "user2",
    username: "jane_smith",
    email: "jane@example.com",
    name: "Jane Smith",
    age: 25,
  },
];

export interface AllUser {
  getAllUsers(): User[];
  getUserByID(id: string): User | undefined;
  createUser(user: User): User;
  deleteUser(id: string): User | undefined;
  updateUser(id: string, updatedUser: User): User | undefined;
}

export class UserRepository implements AllUser {
  getAllUsers(): User[] {
    return users;
  }
  getUserByID(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }
  createUser(user: User): User {
    users.push(user);
    return user;
  }
  deleteUser(id: string): User | undefined {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return undefined;

    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);

    return deletedUser;
  }
  updateUser(id: string, updatedUser: User): User | undefined {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return undefined;

    users[userIndex] = { ...users[userIndex], ...updatedUser };
    return users[userIndex];
  }
}
