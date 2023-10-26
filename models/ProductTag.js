const { Model, DataTypes } = require('sequelize');
// import important parts of sequelize library
const sequelize = require('../config/connection');
// import our database connection from config.js
class ProductTag extends Model { }
// Initialize ProductTag model (table) by extending off Sequelize Model class

// set up fields and rules for ProductTag model
ProductTag.init(
  {
    id: {
      // 'id' is an integer column, serves as the primary key, and auto-increments
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // 'product_id' is an integer column that references the 'id' column of 'product' model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    // 'tag_id' integer column that references the 'id' column of 'tag' model
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    // Pass in the Sequelize connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
  // 'modelName' specifies the model name as 'product_tag'
);

// Export the ProductTag model
module.exports = ProductTag;
