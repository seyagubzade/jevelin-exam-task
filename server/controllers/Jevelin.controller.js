const { JevelinModel } = require("../models/Jevelin.model");

const JevelinModelController = {
  getAll: async (req, res) => {
    try {
      const data = await JevelinModel.find({});
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await JevelinModel.findById(id);
      res.send(target).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      await JevelinModel.findByIdAndDelete(id);
      const data = await JevelinModel.find({});
      res.send(data).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  add: async (req, res) => {
    try {
      const { title, subTitle, desc, model, price, image } = req.body;
      const newData = new JevelinModel({
        title,
        subTitle,
        desc,
        model,
        price,
        image,
      });
      await newData.save();
      res.send(newData).status(200);
    } catch (err) {
      res.send(err).status(404);
    }
  },
};

module.exports = { JevelinModelController };
