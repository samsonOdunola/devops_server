const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Products extends Model {}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.JSON,
    },
  },

  {
    sequelize,
    underscored: true,
    modelName: 'Products',
    tableName: 'products',
    timestamps: false,
  },
);
// Association for users to user-events
// User.belongsToMany(Events, {
//   through: 'UserEvents',
//   foreignKey: 'user_id',
// });

module.exports = Products;
