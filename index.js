require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || '6786';
const { mongoConnect } = require('./utils/dbutils');
const cors=require('cors');
const logger = require('./utils/logger');


app.use(express.json());
app.use(cors());


app.listen(port, () => {
  logger.info(`App listening on port : http://localhost:${port}!`)
  mongoConnect()
  .then(()=>{
      logger.info('Successfully connected to DB');
  })
  .catch((err)=>{
      logger.error(err.message);
  })
});