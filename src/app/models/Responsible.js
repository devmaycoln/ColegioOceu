import Sequelize, { Model } from 'sequelize';

class Responsible extends Model {
  static init(sequelize) {
    super.init(
      {
        //id: Sequelize.INTEGER, 
        nome: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'responsible',
      }
    );
  }
}

export default Responsible;
