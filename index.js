require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || '6786';
const { mongoConnect } = require('./utils/dbutils');
const cors=require('cors');
const logger = require('./utils/logger');
const itemsRouter = require("./routes/items");
const custRouter = require("./routes/customers");
const vehiclesRouter = require("./routes/deliveryVehicles");
const orderRouter = require("./routes/orders");

app.use(cors());
app.use(express.json());
app.use("/items",itemsRouter);
app.use("/customers",custRouter);
app.use("/vehicles",vehiclesRouter);
app.use("/orders",orderRouter);

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