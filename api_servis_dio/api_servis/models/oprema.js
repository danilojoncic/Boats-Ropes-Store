'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oprema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Plovilo}) {
      this.belongsToMany(Plovilo, {
        through: 'PloviloOprema',
        foreignKey: 'oprema_id',
        as: 'plovila',
      });
    }
  }

  Oprema.init({
    naziv: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Oprema',
  });

  return Oprema;
};
