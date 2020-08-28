import Sequelize, { Model } from 'sequelize';

class StudentClass extends Model {
  static init(sequelize) {
    super.init(
      {
       // id: Sequelize.INTEGER, 
       // class_id: Sequelize.INTEGER,
        discont_percent: Sequelize.DOUBLE,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'student_class',
      }
    );
  }
  // static associate(models) {
  //  this.belongsTo(models.Charge, { foreignKey: 'charge_id', as: 'id' });
  // }
  static associate(models) {
    this.belongsTo(models.Class, { foreignKey: 'class_id', as: 'class' });
  }
}

export default StudentClass;
