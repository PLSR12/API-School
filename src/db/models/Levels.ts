import { DataTypes, Model, Optional } from 'sequelize'
import connection from '../../config/dbConnect'

export interface LevelAttributes {
  id?: number
  descr_level: string
  createdAt?: Date
  updatedAt?: Date
}

export interface LevelInput extends Optional<LevelAttributes, 'id'> {}
export interface LevelOutput extends Required<LevelAttributes> {}

class Levels
  extends Model<LevelAttributes, LevelInput>
  implements LevelAttributes
{
  public id!: number
  public descr_level!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}
Levels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descr_level: DataTypes.STRING,
  },

  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    modelName: 'Levels',
  }
)

export default Levels
