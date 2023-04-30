import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
} from "recharts";

const ChartStriko2 = () => {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1000,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
    {
      name: "Page G",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page H",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page I",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page J",
      uv: 480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page K",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page L",
      uv: 1000,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={100} aspect={6 / 1}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="createdAt" tick={{ fontSize: 10 }} />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#1e90ff"
          strokeWidth={2}
          dot={false} // add this line to remove dots
        />
        <YAxis scale="log" domain={["dataMin", "dataMax"]} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartStriko2;
