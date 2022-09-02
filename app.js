const express = require('express');

// Router
const { registersControlRouter } = require('./routes/checkin.routes');

// db.sync()
//   .then(() => console.log('Database synced'))
//   .catch((err) => console.log(err));

const app = express();

app.use(express.json());

// Define endpoints
app.use('/registers', registersControlRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
