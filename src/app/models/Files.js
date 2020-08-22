import Sequelize, { Model } from 'sequelize';

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
        // o parametro tableName precisou ser inserido, pois sem ele a tabela nunca era localizada no banco postgre.
        tableName: 'files',
      }
    );
    return this;
  }
}

export default Files;
