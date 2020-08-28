import Sequelize, { Model } from 'sequelize';

class Institution extends Model {
  static init(sequelize) {
    super.init(
      {
        //id: Sequelize.INTEGER,
        cnpj: Sequelize.STRING,        
        social_reason: Sequelize.STRING,
        short_name: Sequelize.STRING, 
        name: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'institution',
      }
    );
  }
}

export default Institution;
