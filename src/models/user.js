import sequelize from 'sequelize';
import db from '../helpers/db.js'
const {Model, DataTypes} = sequelize;

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  age: DataTypes.NUMBER,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users'
});

export default User;