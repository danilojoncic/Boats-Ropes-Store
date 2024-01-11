'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plovilo extends Model {
    static associate({Kategorija, Oprema, Narudzbina,StavkaNarudzbine}) {
      this.belongsTo(Kategorija, {foreignKey: "kategorija_id", as: "kategorija"})
      this.hasMany(StavkaNarudzbine, {foreignKey: "plovilo_id", as: "stavke"});
      this.belongsToMany(Oprema, {
        through: 'PloviloOprema',
        foreignKey: 'plovilo_id',
        as: 'opreme',
      });
    }
  }

  Plovilo.init({
    naziv: {
      type: DataTypes.STRING(120),
      unique: true,
      allowNull: false
    },
    opis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cena: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kategorija_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Plovilo',
  });

  return Plovilo;
};
