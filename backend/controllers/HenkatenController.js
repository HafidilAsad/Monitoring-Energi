import Henkaten from "../models/HenkatenModel.js";

export const createHenkaten = async (req, res) => {
  try {
    await Henkaten.create(req.body);
    res.status(201).json({ msg: "Henkaten Submited" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getHenkaten = async (req, res) => {
  try {
    const response = await Henkaten.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getHenkatenById = async (req, res) => {
  try {
    const response = await Henkaten.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateHenkaten = async (req, res) => {
  try {
    await Henkaten.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Henkaten Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteHenkaten = async (req, res) => {
  try {
    await Henkaten.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Henkaten Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
