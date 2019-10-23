const express = require('express');
const api = express();

const routes = require('../src/application/routes');

const middlewares = new(require('../src/application/middlewares'));

api.use();
api.use(express.json());
api.use(config.endpoint, routes);
api.use(middlewares.notFound);
api.use(middlewares.serverError);

api.listen(config.port, () => {
	console.info(`Server running on PORT ${config.port} (${config.env})`);
});
