import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "ELECTRICITY", value: 40, fill: "#ffc658" },
  { name: "GAS", value: 40, fill: "#82ca9d" },
  { name: "WATER", value: 10, fill: "#8884d8" },
];

const formatPercent = (value) => `${(value * 100).toFixed()}%`;

const renderLabel = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(value / 100).toFixed(0)}%`}
    </text>
  );
};

const ChartDashboard = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={200}
          label={({ name, percent }) => `${name}: ${formatPercent(percent)}`}
          labelLine={false}
          labelStyle={{ fill: "black" }}
          labelFontSize={20}
        />

        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartDashboard;
