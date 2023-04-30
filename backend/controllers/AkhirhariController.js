import Akhirhari from "../models/akhirhariModel.js";
import { Op } from "sequelize";

export const getAkhirharikemarin = async (req, res) => {
  try {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfToday.getDate() - 1);

    const response = await Akhirhari.findAll({
      where: {
        createdAt: {
          [Op.gte]: startOfYesterday,
          [Op.lt]: startOfToday,
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createAkhirhari = async (req, res) => {
  try {
    await Akhirhari.create(req.body);
    res.status(201).json({ msg: "akhirhari Submitted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAkhirhari = async (req, res) => {
  try {
    const response = await Akhirhari.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAkhirhariById = async (req, res) => {
  try {
    const response = await Akhirhari.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAkhirhari = async (req, res) => {
  try {
    await Akhirhari.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAkhirhari = async (req, res) => {
  try {
    await Akhirhari.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
