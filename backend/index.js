import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UtilityCostRoute from "./routes/UtilityCostRoute.js";
import PvRoute from "./routes/PvRoute.js";
import ReportRoute from "./routes/ReportRoute.js";
import Striko1Route from "./routes/Striko1Route.js";
import PermenitRoute from "./routes/Permenit.js";
import PermenitStriko2 from "./routes/PermenitStriko2.js";
import PermenitStriko3 from "./routes/PermenitStriko3.js";
import PermenitSwiftAsia from "./routes/PermenitSwiftAsia.js";
import AkhirHariRoute from "./routes/AkhirHariRoute.js";
import AkhirHariStriko2 from "./routes/AkhirHariStriko2.js";
import AkhirHariStriko3 from "./routes/AkhirHariStriko3.js";
import AkhirHariSwiftAsia from "./routes/AkhirHariSwiftAsia.js";
import PesanNotifikasi from "./routes/PesanNotifikasi.js";
import Henkaten from "./routes/Henkaten.js";
import Attendance from "./routes/Attendance.js";
import cron from "node-cron";
import axios from "axios";
import schedule from "node-schedule";

dotenv.config();

var app = express();

//Ini untuk session user
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

// // (async()=>{
// //     await db.sync();
// // })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 3600000, // satu jam
    },
  })
);

cron.schedule("0 * * * *", async () => {
  store.destroy({
    where: {
      expires: {
        [Op.lt]: new Date(),
      },
    },
  });
});

const whitelist = ["http://localhost:3000/"];
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(UtilityCostRoute);
app.use(PvRoute);
app.use(ReportRoute);
app.use(Striko1Route);
app.use(PermenitRoute);
app.use(PermenitStriko2);
app.use(PermenitStriko3);
app.use(PermenitSwiftAsia);
app.use(AkhirHariRoute);
app.use(AkhirHariStriko2);
app.use(AkhirHariStriko3);
app.use(AkhirHariSwiftAsia);
app.use(PesanNotifikasi);
app.use(Henkaten);
app.use(Attendance);

//store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running.... on port 5000");
});

const job = schedule.scheduleJob("45 15 * * *", async () => {
  let gas_kemarin = 0;
  let gas_kemarin_swiftasia;
  try {
    const response = await axios.get("http://localhost:5000/akhirharikemarin");
    gas_kemarin = response.data.map((gas) => gas.gas_consumption);
    console.log("Yesterday's gas usage:", gas_kemarin);
  } catch (error) {
    console.error("Error getting yesterday's gas usage:", error);
    return;
  }
  try {
    const response = await axios.get(
      "http://localhost:5000/akhirharikemarinswiftasia"
    );
    gas_kemarin_swiftasia = response.data.map((gas) => gas.gas_consumption);
    console.log("Yesterday's gas usage swift asia:", gas_kemarin_swiftasia);
  } catch (error) {
    console.error("Error getting yesterday's gas usage swift asia:", error);
    return;
  }

  const today = new Date().toISOString().slice(0, 10); // get current date in ISO format
  //Striko1==================================================================================================
  const response = await axios.get(
    "http://10.14.20.212:3551/api/lhpChargingStriko1"
  );
  const filteredData = response.data.filter((item) => item.tanggal === today);
  const totalChargingStriko1 = filteredData[0]?.total_charging_rs || 0;
  //SwiftAsia================================================================================================
  const response4 = await axios.get(
    "http://10.14.20.212:3551/api/lhpChargingSwiftAsia"
  );
  const filteredData4 = response4.data.filter((item) => item.tanggal === today);
  const totalChargingSwiftAsia = filteredData4[0]?.total_charging_rs || 0;
  //Striko3==================================================================================================
  const response3 = await axios.get(
    "http://10.14.20.212:3551/api/lhpChargingStriko3"
  );
  const filteredData3 = response3.data.filter((item) => item.tanggal === today);
  const totalChargingStriko3 = filteredData3[0]?.total_charging_rs || 0;

  //Striko2==================================================================================================
  const response2 = await axios.get(
    "http://10.14.20.212:3551/api/lhpChargingStriko2"
  );
  const filteredData2 = response2.data.filter((item) => item.tanggal === today);
  const totalChargingStriko2 = filteredData2[0]?.total_charging_rs || 0;

  const gasUsedMentah = await getData();
  const gasUsedMentahSwiftAsia = await getData4();
  const gasUsed = gasUsedMentah - gas_kemarin;
  const gasUsedSwiftAsia = gasUsedMentahSwiftAsia - gas_kemarin_swiftasia;
  const namaMesin = "Striko 1";
  const namaMesin4 = "Swift Asia";
  let gasConsumption = 0;
  let gasConsumptionSwiftAsia = 0;
  let roundedGasConsumption = 0;
  let roundedGasConsumptionSwiftAsia = 0;
  let gasMmbtu = 0;
  let gasMmbtuSwiftAsia = 0;
  let gasCost = 0;
  let gasCostSwiftAsia = 0;
  if (totalChargingStriko1 !== 0) {
    gasConsumption = (gasUsed / totalChargingStriko1) * 1000; //ngambil API LHP Charging http://10.14.20.212:3551/api/lhpChargingSwiftAsia
    roundedGasConsumption = gasConsumption.toFixed(1);
  }
  if (totalChargingSwiftAsia !== 0) {
    gasConsumptionSwiftAsia =
      (gasUsedSwiftAsia / totalChargingSwiftAsia) * 1000; //ngambil API LHP Charging http://10.14.20.212:3551/api/lhpChargingSwiftAsia
    roundedGasConsumptionSwiftAsia = gasConsumptionSwiftAsia.toFixed(1);
  }
  gasMmbtu = (gasUsed / 27.2203879834687).toFixed(1);
  gasMmbtuSwiftAsia = (gasUsedSwiftAsia / 27.2203879834687).toFixed(1);
  gasCost = (gasMmbtu * 10.03).toFixed(1);
  gasCostSwiftAsia = (gasMmbtuSwiftAsia * 10.03).toFixed(1);

  const data = {
    nama_mesin: namaMesin,
    gas_used: gasUsed,
    gas_consumption: roundedGasConsumption,
    total_charging: totalChargingStriko1,
    gas_mmbtu: gasMmbtu,
    gas_cost: gasCost,
  };

  const data4 = {
    nama_mesin: namaMesin4,
    gas_used: gasUsedSwiftAsia,
    gas_consumption: roundedGasConsumptionSwiftAsia,
    total_charging: totalChargingSwiftAsia,
    gas_mmbtu: gasMmbtuSwiftAsia,
    gas_cost: gasCostSwiftAsia,
  };

  console.log(totalChargingStriko1);

  // Post the data
  try {
    const response = await axios.post("http://localhost:5000/addreports", data);
    console.log("Data posted:", response.data);

    // Check if gas consumption is greater than 60 and post notification
    if (roundedGasConsumption > 60) {
      const notificationData = {
        pesan_notifikasi: "Gas Consumption Striko1 is Exceed The Limit",
      };
      const notificationResponse = await axios.post(
        "http://localhost:5000/addpesannotifikasi",
        notificationData
      );
      console.log("Notification posted:", notificationResponse.data);
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
  //Post Data Swift asia
  try {
    const response = await axios.post(
      "http://localhost:5000/addreports",
      data4
    );
    console.log("Data Swift Asia posted:", response.data);

    // Check if gas consumption is greater than 60 and post notification
    if (roundedGasConsumptionSwiftAsia > 60) {
      const notificationData = {
        pesan_notifikasi: "Gas Consumption Swift Asia is Exceed The Limit",
      };
      const notificationResponse = await axios.post(
        "http://localhost:5000/addpesannotifikasi",
        notificationData
      );
      console.log("Notification posted:", notificationResponse.data);
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
});

const getData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/striko1s");
    const filteredData = response.data
      .filter((item) => item.id === 1 && item.gas_consumption !== undefined)
      .map((item) => item.gas_consumption);

    return filteredData[0];
  } catch (error) {
    console.error("Error getting data:", error);
  }
};

const getData4 = async () => {
  try {
    const response = await axios.get("http://localhost:5000/striko1s");
    const filteredData = response.data
      .filter((item) => item.id === 4 && item.gas_consumption !== undefined)
      .map((item) => item.gas_consumption);

    return filteredData[0];
  } catch (error) {
    console.error("Error getting data:", error);
  }
};
