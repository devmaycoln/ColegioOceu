'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('charge', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      school: {
        type: Sequelize.STRING,
        defaultValue: 'edg',
        allowNull: false,        
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reference: { 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      expire_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      customer_person_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_nickname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customer_cnpj_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_zipcode: {           
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_email_cc: {          
        type: Sequelize.STRING,
        allowNull: true,
      },
      customer_address: {           
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_city_name: {           
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_state: {          
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_address_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customer_address_complement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_mobile_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customer_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      }, //observacoes do cliente
      customer_paid_status: {
        type: Sequelize.BOOLEAN,      
        allowNull: false,
      }, // provavelmente o campo que indica se está pago ou nao
      paid_amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }, //valor pago, provavelmente pode ser pago parcial
      institution_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, // chave estrangeira da empresa da outra base Educare
      instructions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      document_date: {
        type: Sequelize.DATE,
        allowNull: false,
      }, // data que foi emitida a cobrança
      control_number: { 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      student_class_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, //chave estrangeira da tabela aluno_turma da outra base Educare
      last_modified_by_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      last_modified_date: { 
        type: Sequelize.DATE,
        allowNull: false,
      },
      student_complete_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      school_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      student_complete_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },//enva: Sequelize.BOOLEAN,
      amount_itens: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      financial_officer: {
        type: Sequelize.STRING,
        allowNull: false,
      }, // chave estrangeira do responsável. Usaremos esse campo para agrupar uma carta para detalhar parcelas em atraso para alunos do mesmo responsável financeiro
      created_at:{ 
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('charge');
  }
};
