'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('user_techs', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id'}, // cria foreign key
          // CASO O ID SEJA ALTERADO 
          onUpdate: 'CASCADE',
          // CASO SEJA DELETADO 
          onDelete: 'CASCADE',
        },
        tech_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'techs', key: 'id'}, // cria foreign key
          // CASO O ID SEJA ALTERADO 
          onUpdate: 'CASCADE',
          // CASO SEJA DELETADO 
          onDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      });
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('user_techs');
     
  }
};
