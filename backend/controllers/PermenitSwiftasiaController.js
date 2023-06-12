import PermenitSwiftAsia from "../models/PermenitSwiftAsiaModel.js";
import { Op } from "sequelize";

export const getPermenitSwiftAsiahariini2jamterahir = async (req, res) => {
  try {
    const twoHoursAgo = new Date(Date.now() - 8 * 30 * 60 * 1000);
    const response = await PermenitSwiftAsia.findAll({
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
