import type { User } from "@/data/entities/User";
import { users } from "@/data/mocks/users";

export async function login(email: string, password: string): Promise<User> {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error(`User with email ${email} not found`);
  }
  if (user.password !== password) {
    throw new Error(`User's password is incorrect`);
  }

  return user;
}