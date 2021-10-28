import sequelize from 'sequelize';
import db from '../helpers/db.js'
const {Model, DataTypes} = sequelize;

class Product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

Product.init({
  name: DataTypes.STRING,
  category_id: DataTypes.NUMBER,
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  imagePath: DataTypes.TEXT,
  availableCount: DataTypes.NUMBER,
  price: DataTypes.NUMBER,
  discountedPrice: DataTypes.NUMBER,
}, {
  sequelize: db,
  modelName: 'Product',
  tableName: 'products'
});

export default Product;