import Sequelize, { Model } from 'sequelize';

class AlterationCharge extends Model {
  static init(sequelize) {
    super.init(
      {
        //id: Sequelize.STRING, 
        school: Sequelize.STRING,
        //charge_id: Sequelize.STRING,
        reason: Sequelize.STRING,
        type: Sequelize.INTEGER,
        date: Sequelize.DATE,
        //user_id: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'alteration_charge',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Charge, { foreignKey: 'charge_id', as: 'charge' });
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default AlterationCharge;
