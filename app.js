const express = require('express');

// Models
const { Checkin } = require('./models/checkin.model')

// Utils
const { db } = require('./utils/database.util')

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

// db.sync()
//   .then(() => console.log('Database synced'))
//   .catch((err) => console.log(err));

const app = express();

app.use(express.json());

// Define endpoints


const PORT = 4000;

app.listen(PORT, () => {
  console.log('Express app running!');
});
