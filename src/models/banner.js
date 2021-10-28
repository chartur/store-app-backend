import sequelize from 'sequelize';
import db from '../helpers/db.js'
const {Model, DataTypes} = sequelize;


class Banner extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
Banner.init({
  path: DataTypes.STRING,
  link: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'Banner',
  tableName: 'banners'
});

export default Banner;