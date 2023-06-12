import PermenitStriko3 from "../models/PermenitStriko3Model.js";
import { Op } from "sequelize";

export const getPermenitStriko3hariini2jamterahir = async (req, res) => {
  try {
    const twoHoursAgo = new Date(Date.now() - 8 * 30 * 60 * 1000);
    const response = await PermenitStriko3.findAll({
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
