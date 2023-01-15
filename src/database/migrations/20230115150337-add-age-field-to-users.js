'use strict';

const { BackendKeyDataMessage } = require('pg-protocol/dist/messages');

// MÉTODO PARA ADICIONAR UMA NOVA COLUNA NUMA TABELA EXISTENTE SEM PRECISAR DAR ROW BACK (DESFAZER) COMANDOS ANTERIORES 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users', //add na tabela users
      'age', //a coluna age
      {
        type: Sequelize.INTEGER,
      },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn( //metodo remover, quando quiser fazer row back
      'users',
      'age',
    );
  }
};
