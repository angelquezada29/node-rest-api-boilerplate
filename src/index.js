const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const routes = require('./application/routes/index');

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
	console.info(`Server running on PORT ${process.env.PORT}`);
});

module.exports = app;

