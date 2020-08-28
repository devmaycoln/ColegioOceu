import Sequelize, { Model } from 'sequelize';

class Charge extends Model {
  static init(sequelize) {
    super.init(
      {
        school: Sequelize.STRING,
        type: Sequelize.STRING,
        reference: Sequelize.STRING,
        //id: Sequelize.INTEGER,
        amount: Sequelize.DOUBLE,
        expire_at: Sequelize.DATE,
        description: Sequelize.STRING,
        customer_id: Sequelize.INTEGER,
        customer_person_name: Sequelize.STRING,
        customer_nickname: Sequelize.STRING,
        customer_cnpj_cpf: Sequelize.STRING,
        customer_zipcode: Sequelize.STRING,
        customer_email: Sequelize.STRING,
        customer_email_cc: Sequelize.STRING,
        customer_address: Sequelize.STRING,
        customer_city_name: Sequelize.STRING,
        customer_state: Sequelize.STRING,
        customer_address_number: Sequelize.INTEGER,
        customer_address_complement: Sequelize.STRING,
        customer_phone_number: Sequelize.STRING,
        customer_mobile_number: Sequelize.STRING,
        customer_notes: Sequelize.STRING, //observacoes do cliente
        customer_paid_status: Sequelize.BOOLEAN, // provavelmente o campo que indica se está pago ou nao
        paid_amount: Sequelize.DOUBLE, //valor pago, provavelmente pode ser pago parcial
        institution_id: Sequelize.INTEGER, // chave estrangeira da empresa da outra base Educare
        instructions: Sequelize.STRING,
        document_date: Sequelize.DATE, // data que foi emitida a cobrança
        control_number: Sequelize.INTEGER,
        student_class_id: Sequelize.INTEGER, //chave estrangeira da tabela aluno_turma da outra base Educare
        last_modified_by_id: Sequelize.INTEGER,
        last_modified_date: Sequelize.DATE,
        student_complete_name: Sequelize.STRING,
        school_name: Sequelize.STRING,
        student_complete_name: Sequelize.STRING,
        //enva: Sequelize.BOOLEAN,
        amount_itens: Sequelize.INTEGER,
        financial_officer: Sequelize.STRING, // chave estrangeira do responsável. Usaremos esse campo para agrupar uma carta para detalhar parcelas em atraso para alunos do mesmo responsável financeiro
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,        
      },
      {
        sequelize,
        tableName: 'charge',
      }
    );
  }
}

export default Charge;
