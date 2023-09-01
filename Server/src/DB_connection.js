require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("../src/models/Favorite");
const UserModel = require("../src/models/User");

const sequelize = new Sequelize(
   'postgres://postgres:Kirita77@5432/rickandmorty',
   { logging: false, native: false }
);

UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: "user_favorite"}),
Favorite.belongsToMany(User, {through: "user_favorite"})

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
