const express = require('express');
const app = express();

const routes = require('./application/routes/index');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
	console.info(`Server running on PORT 3000`);
});

module.exports = app;

