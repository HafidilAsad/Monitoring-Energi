import Permenit from "../models/PermenitModel.js";
import { Op } from "sequelize";
import Sequelize from "sequelize";

export const getKemarin2359 = async function (req, res) {
  try {
    const today = new Date();
    today.setDate(today.getDate() - 1); // Mengurangi 1 hari dari tanggal saat ini
    const yesterday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      17,
      0
    ); // Set jam dan menit ke 16:00

    const response = await Permenit.findAll({
      where: {
        createdAt: {
          [Op.between]: [yesterday, today],
        },
        [Op.and]: Sequelize.where(
          Sequelize.fn("HOUR", Sequelize.col("createdAt")),
          16
        ),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPermenithariini2jamterahir = async (req, res) => {
  try {
    const twoHoursAgo = new Date(Date.now() - 8 * 60 * 60 * 1000);
    const response = await Permenit.findAll({
      where: {
        createdAt: {
          [Op.gt]: twoHoursAgo,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPermenithariini = async (req, res) => {
  try {
    const today = new Date().toLocaleDateString();
    const response = await Permenit.findAll({
      where: {
        createdAt: {
          [Op.between]: [new Date(today), new Date(today + " 23:59:59")],
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPermenit = async (req, res) => {
  try {
    await Permenit.create(req.body);
    res.status(201).json({ msg: "permenit Submited" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPermenit = async (req, res) => {
  try {
    const response = await Permenit.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPermenitById = async (req, res) => {
  try {
    const response = await Permenit.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePermenit = async (req, res) => {
  try {
    await Permenit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "permenit Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePermenit = async (req, res) => {
  try {
    await Permenit.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "permenit Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
