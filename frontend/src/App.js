import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddTonase from "./pages/AddTonase";
import ReportHour from "./pages/ReportHour";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Sdb2 from "./components/Sdb2";
import UtilityCost from "./pages/UtilityCost";
import InputUtility from "./pages/InputUtility";
import InputPV from "./pages/InputPV";
import Gas from "./pages/Gas";
import GasConsumption from "./pages/GasConsumption";

// import { useState  } from "react";
// import { Data } from "../utils/Data";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/sdb2" element={<Sdb2 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/formaddtonase" element={<AddTonase />} />
          <Route path="/reporthour" element={<ReportHour />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/utilitycost" element={<UtilityCost />} />
          <Route path="/inpututility" element={<InputUtility />} />
          <Route path="/inputpv" element={<InputPV />} />
          <Route path="/gas" element={<Gas />} />
          <Route path="/gasconsumption" element={<GasConsumption />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
