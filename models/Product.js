// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      // 'id' is an integer column, serves as the primary key, and auto-increments
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      // 'product_name' is a string column for the product's name, cannot be null
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      // decimal column 'price' with 10 digits 2 places, cannot be null
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      // integer column 'stock', no null, deafult value of 10
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
      // if stock is a valid integer
    },
    //  integer column references 'category' model 'id' column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    // Pass in the Sequelize connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
    // 'modelName' specifies the model name as 'product'
  }
);

// Export the Product model
module.exports = Product;
