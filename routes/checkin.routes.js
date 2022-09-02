const express = require('express');

const {
  getAllRegisters,
  getRegister,
  checkIn,
  checkOut,
  cancelRegister,
} = require('../controllers/checkin.controller');

const registersControlRouter = express.Router();

registersControlRouter.get('/', getAllRegisters);
registersControlRouter.get('/:id', getRegister);
registersControlRouter.post('/', checkIn);
registersControlRouter.post('/:id', checkOut);
registersControlRouter.patch('/:id', cancelRegister);

module.exports = { registersControlRouter };
