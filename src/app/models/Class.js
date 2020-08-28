import Sequelize, { Model } from 'sequelize';

class Class extends Model {
  static init(sequelize) {
    super.init(
      {
        //id: Sequelize.INTEGER, 
        //serie_id: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'class',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Serie, { foreignKey: 'serie_id', as: 'serie' });
  }
}

export default Class;
