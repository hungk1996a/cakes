const express = require('express');
const app = express();

const knex = require('./config');
const router = require('./router/router');
const CakeRepository = require('./cake/CakeRepository');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('repo', new CakeRepository(knex));

app.use(router);

app.listen(3000, () => {
   console.log('run');
});