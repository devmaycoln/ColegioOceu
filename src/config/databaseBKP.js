module.exports = {
  development: {
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    params: { dialect: 'postgres' },
  },
  define: {
    timestamps: true,

    // O parametro abaixo (underscored: true) nao funciona em versoes acima da 4x do Sequelize. Sendo assim nas migrations, todos os campos foram alterados para sem underscore, pois
    // ao criar a tabela (db:migrations) eram criadas igual ao digitado (com underscore), no entanto o comando sql gerado pelo dialect nunca batia com a base, pois o sequelize nao respeitava o underscore ditigado.
    // Assim, por exemplo, tentava-se inserir uma coluna chamada "createdAt" no comando, sendo que a coluna se chamava "created_at" no banco postgre.
    underscored: true,
    underscoredAll: true,
  },
};
