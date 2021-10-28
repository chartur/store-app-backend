import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || 'development';
import config from '../config/config.json';
const conf = config[env];
const sequelize = new Sequelize({
    dialect: 'mysql',
    ...conf
});

export default sequelize;