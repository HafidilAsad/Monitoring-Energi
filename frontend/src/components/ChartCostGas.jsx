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
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ChartCostGas = () => {
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reports")
      .then((response) => {
        const options = { day: "numeric", month: "short" };
        const filteredData = response.data.filter(
          (item) => item.nama_mesin === "Striko 1"
        );
        setData2(
          filteredData.map((item) => ({
            tanggal: new Date(item.createdAt).toLocaleDateString(
              "en-GB",
              options
            ),
            gas_consumption: item.gas_used / 27.2,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1 className="pl-4 is-size-6 has-text-weight-bold">
        Graphic Perhari mmbtu
      </h1>
      <br />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data2}>
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Bar
            type="monotone"
            dataKey="gas_consumption"
            fill="#1e90ff"
            barSize={40}
          >
            <LabelList
              valueAccessor={(props) => {
                const { value } = props;
                return Array.isArray(value) ? value[1] - value[0] : value;
              }}
              position={"top"}
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

export default ChartCostGas;
