'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PloviloOprema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Plovilo,Oprema}) {
      this.belongsTo(Plovilo, {foreignKey: "plovilo_id", as: "plovilo"})
      this.belongsTo(Oprema,{foreignKey:"oprema_id",as: "oprema"})
    }
  }
  PloviloOprema.init({
    id2: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'PloviloOprema',
  });
  return PloviloOprema;
};