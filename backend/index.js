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
import AkhirHariRoute from "./routes/AkhirHariRoute.js";
import PesanNotifikai from "./routes/PesanNotifikasi.js";
import cron from "node-cron";
import axios from "axios";
import schedule from "node-schedule";

dotenv.config();

var app = express();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

// (async()=>{
//     await db.sync();
// })();

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
app.use(AkhirHariRoute);
app.use(PesanNotifikai);

//store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running.... in port 5000");
});

const job = schedule.scheduleJob("45 15 * * *", async () => {
  let gas_kemarin = 0;
  try {
    const response = await axios.get("http://localhost:5000/akhirharikemarin");
    gas_kemarin = response.data.map((gas) => gas.gas_consumption);
    console.log("Yesterday's gas usage:", gas_kemarin);
  } catch (error) {
    console.error("Error getting yesterday's gas usage:", error);
    return;
  }

  const today = new Date().toISOString().slice(0, 10); // get current date in ISO format
  const response = await axios.get(
    "http://10.14.20.212:3551/api/lhpChargingStriko1"
  );
  const filteredData = response.data.filter((item) => item.tanggal === today);
  const totalChargingStriko1 = filteredData[0]?.total_charging_rs || 0;

  const gasUsedMentah = await getData();
  const gasUsed = gasUsedMentah - gas_kemarin;
  const namaMesin = "Striko 1";
  let gasConsumption = 0;
  let roundedGasConsumption = 0;
  if (totalChargingStriko1 !== 0) {
    gasConsumption = (gasUsed / totalChargingStriko1) * 1000; //ngambil API LHP Charging http://10.14.20.212:3551/api/lhpChargingSwiftAsia
    roundedGasConsumption = gasConsumption.toFixed(1);
  }

  const data = {
    nama_mesin: namaMesin,
    gas_used: gasUsed,
    gas_consumption: roundedGasConsumption,
  };

  console.log(totalChargingStriko1);

  // Post the data
  try {
    const response = await axios.post("http://localhost:5000/addreports", data);
    console.log("Data posted:", response.data);

    // Check if gas consumption is greater than 60 and post notification
    if (roundedGasConsumption > 10) {
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
