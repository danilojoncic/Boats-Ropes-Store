'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PloviloOpremas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plovilo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Plovilos', // Make sure it matches the actual table name
          key: 'id', // Make sure it matches the actual primary key column name in Plovilos
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      oprema_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Opremas', // Make sure it matches the actual table name
          key: 'id', // Make sure it matches the actual primary key column name in Opremas
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PloviloOpremas');
  }
};
