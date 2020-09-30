const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, async() => {
	console.log('🚀️ server started on port 3333!');
});
