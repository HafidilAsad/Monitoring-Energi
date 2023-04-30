import Report from "../models/ReportModel.js";

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

//  export const deleteReport = async(req, res) =>{
//      try {
//          await Report.destroy({
//              where:{
//                  id: req.params.id
//              }
//          });
//          res.status(200).json({msg: "Report Deleted"});
//      } catch (error) {
//          console.log(error.message);
//      }
//  }

// export const createCost = async(req, res) =>{
//     try {
//         await User.create(req.body);
//         res.status(201).json({msg: "User Created"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

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

// export const createCost = async(req, res) =>{
//     try {
//         await User.create({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "Cost Submited"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const deleteUser = async(req, res) =>{
//     try {
//         await User.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// export const getReport = async(req, res) =>{
//     try {
//         const response = await Report.findAll();
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const getReportById = async(req, res) =>{
//     try {
//         const response = await Report.findOne({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const createUser = async(req, res) =>{
//     try {
//         await User.create(req.body);
//         res.status(201).json({msg: "User Created"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const updateUser = async(req, res) =>{
//     try {
//         await User.update(req.body,{
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Updated"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const deleteUser = async(req, res) =>{
//     try {
//         await User.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
