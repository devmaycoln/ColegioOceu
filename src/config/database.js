module.exports = {
  development: {
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    dialect: 'postgres',
    params: { dialect: 'postgres' },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
