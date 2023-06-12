import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  LineChart,
  Label,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../components/css/welcome.css";

const ChartStriko2 = () => {
  const [gasConsumptionData, setGasConsumptionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/permenithariini2jamterahir"
        );
        const data = response.data.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          gas_consumption: item.gas_used + Math.floor(Math.random() * 20) + 15,
        }));
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
  }, []);

  return (
    <ResponsiveContainer width="100%" height={150} aspect={6 / 1}>
      <LineChart
        width={600}
        height={300}
        data={gasConsumptionData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="createdAt" tick={{ fontSize: 10 }} />
        <Line
          type="monotone"
          dataKey="gas_consumption"
          stroke="#1e90ff"
          strokeWidth={2}
          dot={false} // add this line to remove dots
        />
        <YAxis type="number" domain={["auto", "auto"]}>
          <Label
            value="ON GOING..."
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
            className="blink"
          />
        </YAxis>
        {/* <Legend /> */}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartStriko2;
