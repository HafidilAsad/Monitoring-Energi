import PesanNotifikasi from "../models/PesanNotifikasiModel.js";
import { Op } from "sequelize";

//Pengambilan data kemarin
export const getPesanNotifikasiKemarin = async (req, res) => {
  try {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const response = await PesanNotifikasi.findAll({
      attributes: ["id", "pesan_notifikasi", "createdAt", "updatedAt"],
      where: {
        updatedAt: {
          [Op.gte]: yesterday,
          [Op.lt]: today,
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to fetch pesan notifikasi" });
  }
};

export const createPesanNotifikasi = async (req, res) => {
  try {
    await PesanNotifikasi.create(req.body);
    res.status(201).json({ msg: "PesanNotifikasi Submited" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesanNotifikasi = async (req, res) => {
  try {
    const response = await PesanNotifikasi.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPesanNotifikasiById = async (req, res) => {
  try {
    const response = await PesanNotifikasi.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePesanNotifikasi = async (req, res) => {
  try {
    await PesanNotifikasi.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "PesanNotifikasi Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePesanNotifikasi = async (req, res) => {
  try {
    await PesanNotifikasi.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "PesanNotifikasi Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
