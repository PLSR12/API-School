import { DataTypes, Model, Optional } from 'sequelize'
import connection from '../../config/dbConnect'

export interface PersonAttributes {
  id?: number
  name: string
  email: string
  role?: string | null
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface PersonInput extends Optional<PersonAttributes, 'id'> {}
export interface PersonOutput extends Required<PersonAttributes> {}

class Persons
  extends Model<PersonAttributes, PersonInput>
  implements PersonAttributes
{
  public id!: number
  public name!: string
  public email!: string
  public role!: string
  public active!: boolean

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}
Persons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  },

  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    modelName: 'Persons',
  }
)

export default Persons
