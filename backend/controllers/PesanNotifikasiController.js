import PesanNotifikasi from "../models/PesanNotifikasiModel.js";

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
