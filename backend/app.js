const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./router');
const app = express()
// app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(router);
module.exports =app