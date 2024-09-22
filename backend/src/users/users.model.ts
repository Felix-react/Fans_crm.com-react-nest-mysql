import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false, // Disable automatic timestamps
  tableName: 'Users', // Specify the table name to ensure it's correctly mapped
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;
}
