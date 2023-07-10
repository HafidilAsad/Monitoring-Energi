import Attendance from "../models/AttendanceModel.js";

export const createAttendance = async (req, res) => {
  try {
    await Attendance.create(req.body);
    res.status(201).json({ msg: "Attendance Submited" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAttendance = async (req, res) => {
  try {
    const response = await Attendance.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAttendanceById = async (req, res) => {
  try {
    const response = await Attendance.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAttendance = async (req, res) => {
  try {
    await Attendance.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Attendance Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    await Attendance.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Attendance Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
