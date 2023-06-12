import AkhirhariStriko2 from "../models/akhirhariStriko2Model.js";

export const getAkhirhariStriko2kemarin = async (req, res) => {
  try {
    const response = await AkhirhariStriko2.findAll({
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
