'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Plovilos',
        [
          {id:"1",naziv:"Lolivul 5.1", opis:"gumenjak", cena: 24000, kategorija_id:1},
          {id:"2",naziv:"Comanchee", opis:"opasan jedrenjak", cena: 300000, kategorija_id:2}
        ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Plovilos', null, {});
  }
};
