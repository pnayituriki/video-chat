const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const utils = require('./utils');

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`Server is running`));

utils.socket(server);

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));