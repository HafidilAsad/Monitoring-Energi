import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  LineChart,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ChartStriko1 = () => {
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
          gas_consumption: item.gas_used,
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
    <ResponsiveContainer width="100%" height={100} aspect={6 / 1}>
      <LineChart
        width={600}
        height={300}
        data={gasConsumptionData.slice(-16)}
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
        <YAxis scale="log" domain={["dataMin", "dataMax"]} />
        {/* <Legend /> */}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartStriko1;
