import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false, // Enable timestamps
  tableName: 'Users', // Ensure it targets the correct table
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
    defaultValue: '82134825',
  })
  phone: string;
}
