import { useState } from "react";
import React from "react"
import BarChart from "../components/BarChart";
import { UserData } from "../components/Data";
import { UserData2 } from "../components/Data";


function Dashboard() {
  
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Ampere",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userData2, setUserData2] = useState({
    labels: UserData2.map((data) => data.year),
    datasets: [
      {
        label: "Ampere",
        data: UserData2.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div>
      <p className="title is-3 is-spaced">Monitoring SDP</p>
      <p className="subtitle is-5">SDB-MC1</p>
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>

      <div>
      <p className="subtitle is-5 mt-6">SDB-MC2</p>
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData2} />
      </div>

      <div>
      <p className="subtitle is-5 mt-6 ">SDB-MC3</p>
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
    
  );
}



export default Dashboard