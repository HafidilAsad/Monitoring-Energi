import monthly from "../models/MonthlyModel.js";

export const createmonthly = async (req, res) => {
  try {
    await monthly.create(req.body);
    res.status(201).json({ msg: "monthly Submitted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getmonthlys = async (req, res) => {
  try {
    const response = await monthly.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getmonthlyById = async (req, res) => {
  try {
    const response = await monthly.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatemonthly = async (req, res) => {
  try {
    await monthly.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "monthly Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletemonthly = async (req, res) => {
  try {
    await monthly.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Utility Cost Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
