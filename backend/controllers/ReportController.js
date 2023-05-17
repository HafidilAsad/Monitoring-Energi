import Report from "../models/ReportModel.js";
import { Op } from "sequelize";

export const getReportperbulanini = async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setDate(1); // set the start date of the current month
    const endDate = new Date();

    const response = await Report.findAll({
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    const gasConsumptionSumTon = response.reduce(
      (sum, report) => sum + report.gas_consumption,
      0
    );

    const gasConsumptionSum = response.reduce(
      (sum, report) => sum + report.gas_used,
      0
    );

    res.status(200).json({
      data: response,
      gasConsumptionSum,
      gasConsumptionSumTon,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getReportConsumptKemarin = async (req, res) => {
  try {
    const response = await Report.findAll({
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

let lastExecuted = null;

export const createReportSekaliSehari = async (req, res) => {
  try {
    const now = new Date();
    if (!lastExecuted || now - lastExecuted > 24 * 60 * 60 * 1000) {
      await Report.create(req.body);
      lastExecuted = now;
      res.status(201).json({ msg: "Report Submitted" });
    } else {
      res.status(400).json({ msg: "Report already submitted today" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createReport = async (req, res) => {
  try {
    await Report.create(req.body);
    res.status(201).json({ msg: "Report Submited" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getReport = async (req, res) => {
  try {
    const response = await Report.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getReportById = async (req, res) => {
  try {
    const response = await Report.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateReport = async (req, res) => {
  try {
    await Report.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Report Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteReport = async (req, res) => {
  try {
    await Report.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Report Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
