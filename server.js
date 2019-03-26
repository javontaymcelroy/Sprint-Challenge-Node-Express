const express = require('express');
const helmet = require('helmet');
const server = express();

const actionsRouter = require('./routes/actionsRouter');
const projectsRouter = require('./routes/projectsRouter');

server.use(express.json());
server.use(helmet());

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.status(200).json({
    message:
      'Welcome, please visit /api/actions or /api/projects to view some data!'
  });
});

module.exports = server;
