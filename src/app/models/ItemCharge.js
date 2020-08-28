import Sequelize, { Model } from 'sequelize';

class ItemCharge extends Model {
  static init(sequelize) {
    super.init(
      {
        school: Sequelize.STRING, //vefificar nas tabelas excell
        charge_id: Sequelize.INTEGER,
        product_name: Sequelize.STRING,
        category_name: Sequelize.STRING,
        student_class_id: Sequelize.INTEGER,
        student_name_class: Sequelize.STRING,//chave estrangeira ////////tabela aluno_turma
        amount_charges: Sequelize.INTEGER,
        amount: Sequelize.DOUBLE,
        discount_value: Sequelize.DOUBLE,
        discount_percentage: Sequelize.INTEGER,
        days_for_discount: Sequelize.DATE,
        discount_date_limit: Sequelize.DATE,
        descrition: Sequelize.STRING,
        paid_amount: Sequelize.DOUBLE,
        absolute_discount_value: Sequelize.DOUBLE,
        reference: Sequelize.STRING,
        status: Sequelize.BOOLEAN, // provavelmente esse é o campo que nos indica se está pago ou nao
        paid_at: Sequelize.DATE, // esse tmb pode ser usado para saber se foi pago ou nao
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,     
      },
      {
        sequelize,
        tableName: 'item_charge',
      }
    );
  }
}

export default ItemCharge;
