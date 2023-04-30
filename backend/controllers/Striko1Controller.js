import Striko1 from "../models/Striko1Model.js";

export const createStriko1 = async (req, res) => {
  try {
    await Striko1.create(req.body);
    res.status(201).json({ msg: "striko1 Submited" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStriko1 = async (req, res) => {
  try {
    const response = await Striko1.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStriko1ById = async (req, res) => {
  try {
    const response = await Striko1.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStriko1 = async (req, res) => {
  try {
    await Striko1.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "striko1 Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStriko1 = async (req, res) => {
  try {
    await Striko1.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "striko1 Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
