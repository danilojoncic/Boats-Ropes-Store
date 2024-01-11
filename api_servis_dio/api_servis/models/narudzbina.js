'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    static associate({StavkaNarudzbine}) {
      this.hasMany(StavkaNarudzbine, {foreignKey: 'narudzbina_id', as: 'stavke'});
    }
  }

  Narudzbina.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vreme_narucivanja: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    zakazno_vreme: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    adresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ime_prezime: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });

  return Narudzbina;
};
