require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING; // I know you said I don't need this, but...I like having a respectful server :)

server.listen(port, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
