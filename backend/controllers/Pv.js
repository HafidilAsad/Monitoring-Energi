import Pv from "../models/PvModel.js";
import { Op } from "sequelize";

export const getPvNewmin5 = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    // Set the latest_date value to yesterday's date
    const latest_date = new Date(currentDate);
    latest_date.setDate(currentDate.getDate() - 5);

    const whereClause = {
      createdAt: {
        // Use the Op.lt (less than) operator to filter data before the latest_date
        [Op.lt]: latest_date,
      },
    };

    const response = await Pv.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPvNewmin4 = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    // Set the latest_date value to yesterday's date
    const latest_date = new Date(currentDate);
    latest_date.setDate(currentDate.getDate() - 4);

    const whereClause = {
      createdAt: {
        // Use the Op.lt (less than) operator to filter data before the latest_date
        [Op.lt]: latest_date,
      },
    };

    const response = await Pv.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPvNewmin3 = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    // Set the latest_date value to yesterday's date
    const latest_date = new Date(currentDate);
    latest_date.setDate(currentDate.getDate() - 3);

    const whereClause = {
      createdAt: {
        // Use the Op.lt (less than) operator to filter data before the latest_date
        [Op.lt]: latest_date,
      },
    };

    const response = await Pv.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPvNewmin2 = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    // Set the latest_date value to yesterday's date
    const latest_date = new Date(currentDate);
    latest_date.setDate(currentDate.getDate() - 2);

    const whereClause = {
      createdAt: {
        // Use the Op.lt (less than) operator to filter data before the latest_date
        [Op.lt]: latest_date,
      },
    };

    const response = await Pv.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPvNewmin1 = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();
    // Set the latest_date value to yesterday's date
    const latest_date = new Date(currentDate);
    latest_date.setDate(currentDate.getDate() - 1);

    const whereClause = {
      createdAt: {
        // Use the Op.lt (less than) operator to filter data before the latest_date
        [Op.lt]: latest_date,
      },
    };

    const response = await Pv.findAll({
      where: whereClause,
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPvshasil = async (req, res) => {
  try {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const todayString = today.toISOString().substring(0, 10);
    const yesterdayString = yesterday.toISOString().substring(0, 10);

    const todayData = await Pv.findOne({
      where: {
        createdAt: {
          [Op.gte]: todayString,
        },
      },
    });
    const yesterdayData = await Pv.findOne({
      where: {
        createdAt: {
          [Op.gte]: yesterdayString,
          [Op.lt]: todayString,
        },
      },
    });

    if (!todayData || !yesterdayData) {
      return res.status(404).send("Data not found");
    }

    const result = {
      nilaipv: todayData.nilaipv - yesterdayData.nilaipv,
    };

    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};

export const createPv = async (req, res) => {
  try {
    await Pv.create(req.body);
    res.status(201).json({ msg: "PV Submitted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPvs = async (req, res) => {
  try {
    const response = await Pv.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPvById = async (req, res) => {
  try {
    const response = await Pv.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePv = async (req, res) => {
  try {
    await Pv.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "PV Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePv = async (req, res) => {
  try {
    await Pv.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Utility Cost Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
