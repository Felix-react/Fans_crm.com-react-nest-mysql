// src/users/users.model.ts
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;
}
