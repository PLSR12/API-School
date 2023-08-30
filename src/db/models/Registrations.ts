import { DataTypes, Model, Optional } from 'sequelize'
import connection from '../../config/dbConnect'
import Persons from './Persons'
import Classes from './Classes'

export interface RegistrationAttributes {
  id?: number
  class_id: number
  student_id: number
  status: string
  createdAt?: Date
  updatedAt?: Date
}

export interface RegistrationInput
  extends Optional<RegistrationAttributes, 'id'> {}
export interface RegistrationOutput extends Required<RegistrationAttributes> {}

class Registrations
  extends Model<RegistrationAttributes, RegistrationInput>
  implements RegistrationAttributes
{
  public id!: number
  public class_id!: number
  public student_id!: number
  public status!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}
Registrations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: DataTypes.STRING,
  },

  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    modelName: 'Registrations',
  }
)

Registrations.belongsTo(Classes, {
  foreignKey: 'class_id',
})
Registrations.belongsTo(Persons, {
  foreignKey: 'student_id',
})

Persons.hasMany(Registrations, { as: 'student_id', foreignKey: 'student_id' })
Classes.hasMany(Registrations, { as: 'class_id', foreignKey: 'class_id' })

export default Registrations
