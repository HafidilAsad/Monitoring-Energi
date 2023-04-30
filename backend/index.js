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
    },
  })
);
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

//store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running....");
});
