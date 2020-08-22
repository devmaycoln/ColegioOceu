// Sem o sucrase, as importacoes devem ser conforme abaixo
// const express = require('express');
// const routes = require('./routes');

import express from 'express';
import path from 'path';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}
// Substituido pela linha subsequente depois da importacao do sucrase
// module.exports = new App().server;
// eslint-disable-next-line eol-last
export default new App().server;
