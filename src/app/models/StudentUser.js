import Sequelize, { Model } from 'sequelize';

class StudentUser extends Model {
  static init(sequelize) {
    super.init(
      {
        //student_id: Sequelize.INTEGER, 
        //responsible_id: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'student_user',
      }
    );
  }
  //static associate(models) {
  //  this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student_user' });
  //}
  static associate(models) {
    this.belongsTo(models.Responsible, { foreignKey: 'responsible_id', as: 'responsible' });
  }
}

export default StudentUser;
