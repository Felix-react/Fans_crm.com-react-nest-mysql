// src/users/users.model.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false, // Disable timestamps to prevent Sequelize from adding createdAt and updatedAt fields
  tableName: 'Users', // Ensure the table name is correct
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;
}
