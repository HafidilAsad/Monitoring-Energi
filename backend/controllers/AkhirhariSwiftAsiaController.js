import AkhirhariSwiftAsia from "../models/akhirhariSwiftAsiaModel.js";

export const getAkhirhariSwiftAsiakemarin = async (req, res) => {
  try {
    const response = await AkhirhariSwiftAsia.findAll({
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
