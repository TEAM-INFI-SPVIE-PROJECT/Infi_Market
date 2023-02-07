'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const siteRoutes = require('./routes/siteRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', roleRoutes.routes);
app.use('/api', siteRoutes.routes);
app.use('/api', productRoutes.routes);
app.use('/api', categoryRoutes.routes);
app.use('/api', authRoutes.routes);



app.listen(config.port, () => {
  console.log('Le serveur est lancé sur l\'url http://localhost:' + config.port )
});