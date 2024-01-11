'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StavkaNarudzbine extends Model {
    static associate({Plovilo, Narudzbina}) {
      this.belongsTo(Plovilo, {foreignKey: 'plovilo_id'});
      this.belongsTo(Narudzbina, {foreignKey: 'narudzbina_id'});
    }
  }

  StavkaNarudzbine.init({
    komada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StavkaNarudzbine',
  });

  return StavkaNarudzbine;
};
