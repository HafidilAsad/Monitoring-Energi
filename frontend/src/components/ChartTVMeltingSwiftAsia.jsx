import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  ReferenceLine,
  Legend,
  LabelList,
} from "recharts";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ChartTVMeltingSwiftAsia = () => {
  const [dataUsed, setDataUsed] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/reports")
      .then((response) => {
        const options = { day: "numeric", month: "short" };
        const filteredData = response.data.filter(
          (item) => item.nama_mesin === "Swift Asia"
        );
        setDataUsed(
          filteredData.map((item) => ({
            tanggal: new Date(item.createdAt).toLocaleDateString(
              "en-GB",
              options
            ),
            gas_consumption: item.gas_consumption,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataUsed.slice(-30)}>
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Bar
            type="monotone"
            dataKey="gas_consumption"
            fill="#1e90ff"
            barSize={40}
          >
            <LabelList
              dataKey="gas_consumption"
              position="top"
              formatter={(value) => `${value}`}
            />
          </Bar>
          <Tooltip />
          <Legend />
          <ReferenceLine
            y={60}
            stroke="red"
            strokeWidth={4}
            label={{
              position: "center",
              fill: "red",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTVMeltingSwiftAsia;
