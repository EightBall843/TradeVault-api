const { sequelize } = require('./data-connections');
const { DataTypes } = require('sequelize')

const Collectables = sequelize.define('collectables', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false

  },
  description: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  condition: {
    type: DataTypes.ENUM('mint', 'excellent', 'very good', 'poor')
  },
  image: {
    type: DataTypes.STRING(),
    allowNull: false
  }

})


module.exports = Collectables;