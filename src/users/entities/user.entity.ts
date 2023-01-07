import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
  password: string;
  isBanned: boolean;
  createdAt: Date;
  updatedAt: Date;
}