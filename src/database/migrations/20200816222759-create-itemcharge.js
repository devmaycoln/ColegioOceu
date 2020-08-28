'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('item_charge', { 
      school: {
        type: Sequelize.STRING,        
        allowNull: false,
      }, //vefificar nas tabelas excell
      charge_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_name: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      student_class_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      student_name_class: { 
        type: Sequelize.STRING,        
        allowNull: false,
      },//chave estrangeira ////////tabela aluno_turma
      amount_charges: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      discount_value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      discount_percentage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      days_for_discount: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      discount_date_limit: { 
        type: Sequelize.DATE,
        allowNull: false,
      },
      descrition: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paid_amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      absolute_discount_value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }, // provavelmente esse é o campo que nos indica se está pago ou nao
      paid_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, // esse tmb pode ser usado para saber se foi pago ou nao   
    
    
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('item_charge');
  }
};
