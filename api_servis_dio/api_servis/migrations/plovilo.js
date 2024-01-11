'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Plovilos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      naziv: {
        type: Sequelize.STRING(120),
        unique: true,
        allowNull: false,
      },
      opis: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cena: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kategorija_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Define foreign key and associations
    await queryInterface.addConstraint('Plovilos', {
      type: 'foreign key',
      fields: ['kategorija_id'],
      references: {
        table: 'Kategorijas', // Assuming the name of the Kategorija model's table is 'Kategorijas'
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    // Additional associations can be defined here

  },

  down: async (queryInterface, Sequelize) => {
    // Undo the changes made in the 'up' function
    await queryInterface.removeConstraint('Plovilos', 'kategorija_id');
    await queryInterface.dropTable('Plovilos');
  },
};
