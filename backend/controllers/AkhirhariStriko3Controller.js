import AkhirhariStriko3 from "../models/akhirhariStriko3Model.js";

export const getAkhirhariStriko3kemarin = async (req, res) => {
  try {
    const response = await AkhirhariStriko3.findAll({
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
