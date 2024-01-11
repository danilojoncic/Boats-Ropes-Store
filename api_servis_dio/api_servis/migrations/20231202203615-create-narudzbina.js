'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Narudzbinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vreme_narucivanja: {
        type: Sequelize.DATE,
        allowNull: false
      },
      zakazno_vreme: {
        type: Sequelize.DATE,
        allowNull: false
      },
      adresa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ime_prezime: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Narudzbinas');
  }
};
/*
1. U konzoli generišite seedere za entitete sa
a. sequelize seed:generate --name create-jela
b. sequelize seed:generate --name create-kategorije
c. sequelize seed:generate --name create-sastojci
2. Ovo će kreirati fajlove u folderu seeds/
3. Otvorite seeders/####-create-jela.js i primetite dva metoda: up i down. Up se poziva kada se
insertuju podaci, down kada se brišu podaci iz baze.
4. Dodajte kod u up(), u kome kreirate nekoliko jela
await queryInterface.bulkInsert('jelos',
[
{id:"1",naziv:"Vegeterijana", opis:"masna", cena: 1200, kategorija_id:1},
{id:"2",naziv:"Kobasica", opis:"posna", cena: 300, kategorija_id:2}
]);
5. Dodajte kod u down() kojim brišete sve iz tabele
a. await queryInterface.bulkDelete('Jela', null, {});
6. Isto uradite i za ostale seedere.
7. U konzoli izvršite
a. sequelize db:seed:all
8. Proverite da li su tabele u bazi popunjene podacima.

 */