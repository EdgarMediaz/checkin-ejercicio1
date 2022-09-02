const { Checkin } = require('../models/checkin.model');

const getAllRegisters = async (req, res) => {
  try {
    const registers = await Checkin.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registers,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegister = async (req, res) => {
  try {
    const { id } = req.params;

    const register = await Checkin.findOne({
      where: { id },
    });
    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'Register not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const checkIn = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newCheckIn = await Checkin.create({
      entranceTime,
    });
    res.status(201).json({
      status: 'success',
      data: { newCheckIn },
    });
  } catch (error) {
    console.log(error);
  }
};

const checkOut = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    const register = await Checkin.findOne({
      where: { id },
    });
    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'register not found',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const cancelRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Checkin.findOne({
      where: { id },
    });
    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'register not found',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegisters,
  getRegister,
  checkIn,
  checkOut,
  cancelRegister,
};
