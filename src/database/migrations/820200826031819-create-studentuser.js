'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('student_user', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },     
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'student_class', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      responsible_id: {
        type: Sequelize.INTEGER,
        references: { model: 'responsible', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('student_user');
     
  }
};
