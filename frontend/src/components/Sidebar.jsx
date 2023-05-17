import React from "react";
import { NavLink } from "react-router-dom";
import {
  IoHome,
  IoPerson,
  IoPricetag,
  IoLogOut,
  IoReader,
  IoAnalytics,
  IoBarChartSharp,
  IoTrendingUpOutline,
  IoFlashSharp,
  IoWaterSharp,
} from "react-icons/io5";
import { LogOut, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="has-navbar-fixed-top">
      <aside className="menu pl-5 has-shadow has-navbar-fixed-top">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/utilitycost"}>
              <IoAnalytics /> Utility Cost
            </NavLink>
          </li>
          <li>
            <NavLink to={"/gas"}>
              <IoWaterSharp /> Monitoring Gas
            </NavLink>
          </li>
          <li>
            <a href="http://10.14.51.17:8000/login">
              <IoFlashSharp /> Monitoring Listrik
            </a>
          </li>
          <li>
            <NavLink to={"/gasconsumption"}>
              <IoBarChartSharp /> Gas Consumption
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> products
            </NavLink>
          </li>
          <NavLink to={"/reportgas"}>
            <IoReader /> Report Gas Perhari
          </NavLink>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>
              {" "}
              <IoPerson /> Users
            </NavLink>
            <NavLink to={"/formaddtonase"}>
              <IoReader /> Input Tonase
            </NavLink>
            <NavLink to={"/inpututility"}>
              <IoReader /> Input Utility
            </NavLink>
            <NavLink to={"/inputpv"}>
              <IoReader /> Input PV
            </NavLink>
            <NavLink to={"/reporthour"}>
              <IoReader /> Report per Jam
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button className="button is-white" onClick={logout}>
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
