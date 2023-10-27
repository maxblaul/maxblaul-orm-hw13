const { Model, DataTypes } = require('sequelize');
// import important parts of sequelize library
const sequelize = require('../config/connection.js');
// import our database connection from config.js
class Tag extends Model { }
// Initialize Tag model (table) by extending off Sequelize Model class

// set up fields and rules for Tag model
Tag.init(
  {
    id: {
      // 'id' column is an integer, cannot be null
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // 'tag_name' is a string column
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    // Pass in the Sequelize connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
  // 'modelName' specifies the model name as 'tag'
);

module.exports = Tag;

// Export the ProductTag model