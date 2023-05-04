import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  // Legend,
  ReferenceLine,
} from "recharts";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ChartStriko1Consumption = () => {
  const [gas_kemarin, setGas_kemarin] = useState([]);
  const [gasConsumptionData, setGasConsumptionData] = useState([]);

  //Mengambil data gas sensor kemarin=========================================================
  useEffect(() => {
    getGas_kemarin();
  }, []);

  const getGas_kemarin = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/akhirharikemarin"
      );
      const gasConsumptions = response.data.map((gas) => gas.gas_consumption);
      setGas_kemarin(gasConsumptions);
    } catch (error) {
      console.error(error);
    }
  };

  //Mengambil data gas consumpt M3============================================================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/permenithariini2jamterahir"
        );
        const data = response.data.map((item) => {
          const gasConsumptionAdjusted = item.gas_consumption - gas_kemarin[0];
          return {
            ...item,
            createdAt: new Date(item.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
            gas_consumption: gasConsumptionAdjusted,
          };
        });
        setGasConsumptionData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, [gas_kemarin]);

  return (
    <ResponsiveContainer width="100%" height={230}>
      <LineChart width={600} height={300} data={gasConsumptionData.slice(-20)}>
        <XAxis dataKey="createdAt" tick={{ fontSize: 10 }} />
        <Line
          type="monotone"
          dataKey="gas_consumption"
          stroke="#1e90ff"
          strokeWidth={3}
          dot={false} // add this line to remove dots
        />
        <YAxis scale="log" domain={["dataMin", "dataMax"]} />
        {/* <Legend /> */}
        <Tooltip />
        <ReferenceLine y={4} stroke="red" label="Target" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartStriko1Consumption;
