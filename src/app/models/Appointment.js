// import Sequelize, { Model } from 'sequelize';
import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
        // o parametro tableName precisou ser inserido, pois sem ele a tabela nunca era localizada no banco postgre.
        tableName: 'appointments',
      }
    );

    return this;
  }

  static associate(models) {
    // quando há mais de um relacionamento com a mesma tabela, é obrigatório utilizar alias
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
