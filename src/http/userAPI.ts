import { users } from '@/data/mocks/users';
import type { User } from '@/data/entities/User';

export async function getUsers(): Promise<User[]> {
  return users;
}