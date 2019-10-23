const express = require('express');
const api = express();

const routes = require('./application/routes/index');

api.use(express.json());
api.use(routes);

api.listen(3000, () => {
	console.info(`Server running on PORT 3000`);
});

