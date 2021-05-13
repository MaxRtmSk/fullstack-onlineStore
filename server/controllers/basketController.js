const { BasketDevice } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async addDevice(req, res, next) {
    const { deviceId } = req.body;
    console.log(deviceId, req.user.id);
    const basketDevice = await BasketDevice.create({
      deviceId: deviceId,
      basketId: req.user.id,
    });
    return res.json(basketDevice);
  }

  async getAll(req, res) {
    const basketDevices = await BasketDevice.findAll({
      where: { basketId: req.user.id },
    });
    return res.json(basketDevices);
  }
}

module.exports = new BasketController();
