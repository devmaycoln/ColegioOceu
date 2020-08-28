import Sequelize, { Model } from 'sequelize';

class Serie extends Model {
  static init(sequelize) {
    super.init(
      {
        //id: Sequelize.INTEGER, 
        //institution_id: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'serie',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Institution, { foreignKey: 'institution_id', as: 'Institution' });
  }
}

export default Serie;
