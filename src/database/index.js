import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/Files';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const { database, username, password, params } = databaseConfig[
      process.env.NODE_ENV || 'development'
    ];
    this.connection = new Sequelize(database, username, password, params);

    models
      .map(model => model.init(this.connection))
      // Se houver associação (&&) faz o relacionamento de todos os modos
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
