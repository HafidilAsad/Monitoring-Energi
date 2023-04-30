import UtilityCost from "../models/UtilityCostModel.js";
import { Op } from "sequelize";

export const getUtilityCostNewmin4 = async (req, res) => {
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

    const response = await UtilityCost.findAll({
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

export const getUtilityCostNewmin3 = async (req, res) => {
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

    const response = await UtilityCost.findAll({
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

export const getUtilityCostNewmin2 = async (req, res) => {
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

    const response = await UtilityCost.findAll({
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

export const getUtilityCostNewmin1 = async (req, res) => {
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

    const response = await UtilityCost.findAll({
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

export const getUtilityCostNew = async (req, res) => {
  try {
    const { latest_date } = req.query;
    const whereClause = {};

    if (latest_date) {
      whereClause.createdAt = {
        // Menggunakan operator lte (less than or equal) untuk memfilter data sebelum atau pada tanggal latest_date
        [Op.lte]: new Date(latest_date),
      };
    }

    const response = await UtilityCost.findAll({
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

export const createUtilityCost = async (req, res) => {
  try {
    await UtilityCost.create(req.body);
    res.status(201).json({ msg: "Utility Cost Submitted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUtilityCosts = async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    const whereClause = {};

    // Jika query parameter start_date tersedia, tambahkan ke where clause
    if (start_date) {
      whereClause.createdAt = {
        // Menggunakan operator gte (greater than or equal) untuk memfilter data mulai dari tanggal start_date
        [Op.gte]: new Date(start_date),
      };
    }

    // Jika query parameter end_date tersedia, tambahkan ke where clause
    if (end_date) {
      whereClause.createdAt = {
        // Menggunakan operator lte (less than or equal) untuk memfilter data sampai dengan tanggal end_date
        [Op.lte]: new Date(end_date),
        ...whereClause.createdAt, // Gabungkan dengan where clause sebelumnya jika start_date tersedia
      };
    }

    const response = await UtilityCost.findAll({ where: whereClause });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// export const getUtilityCosts = async (req, res) => {
//   try {
//     const response = await UtilityCost.findAll();
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const getUtilityCostById = async (req, res) => {
  try {
    const response = await UtilityCost.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUtilityCost = async (req, res) => {
  try {
    await UtilityCost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Utility Cost Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUtilityCost = async (req, res) => {
  try {
    await UtilityCost.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Utility Cost Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
