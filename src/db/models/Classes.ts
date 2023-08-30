import { DataTypes, Model, Optional } from 'sequelize'
import connection from '../../config/dbConnect'
import Persons from './Persons'
import Levels from './Levels'

export interface ClassAttributes {
  id?: number
  teacher_id: number
  level_id: number
  date_start: Date
  createdAt?: Date
  updatedAt?: Date
}

export interface ClassInput extends Optional<ClassAttributes, 'id'> {}
export interface ClassOutput extends Required<ClassAttributes> {}

class Classes
  extends Model<ClassAttributes, ClassInput>
  implements ClassAttributes
{
  public id!: number
  public teacher_id!: number
  public level_id!: number
  public date_start!: Date

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}
Classes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_start: DataTypes.DATEONLY,
  },

  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    modelName: 'Classes',
  }
)

Classes.belongsTo(Persons, {
  foreignKey: 'teacher_id',
})
Classes.belongsTo(Levels, {
  foreignKey: 'level_id',
})

Persons.hasMany(Classes, { as: 'teacher_id', foreignKey: 'teacher_id' })
Levels.hasMany(Classes, { as: 'level_id', foreignKey: 'level_id' })

export default Classes
