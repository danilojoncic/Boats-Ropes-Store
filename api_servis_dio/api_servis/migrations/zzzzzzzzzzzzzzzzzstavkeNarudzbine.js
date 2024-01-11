'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StavkaNarudzbines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      komada: {
        type: Sequelize.INTEGER,
        allowNull: false
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
      narudzbina_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Narudzbinas', // Make sure it matches the actual table name
          key: 'id', // Make sure it matches the actual primary key column name in Narudzbinas
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
    await queryInterface.dropTable('StavkaNarudzbines');
  }
};
