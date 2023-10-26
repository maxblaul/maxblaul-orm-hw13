const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// Import modules and dependencies
class Category extends Model {}
// Define category model by extending Model class
Category.init(
  {
    // id is an integer column, serves as primary key
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
   },
  // 'category_name' is a string column for the category's name, cannot be null
   category_name: {
    type: DataTypes.STRING,
    allowNull: false
   }
  },
  {
    // Pass in the Sequelize connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
    // 'modelName' specifies the model name as 'category'
  }
);

module.exports = Category;

// Export the Category model