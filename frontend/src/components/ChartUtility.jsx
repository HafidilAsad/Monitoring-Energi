import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Line,
  ComposedChart,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Clock from "./Clock";
import CurrentDate from "./CurrentDate";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import myImage from "../paksuyud.JPG"; // Import the image file

const ChartUtility = () => {
  const data = [
    { month: "Jan", cost: 5 },
    { month: "Feb", cost: 4.5 },
    { month: "Mar", cost: 0 },
    { month: "Apr", cost: 0 },
    { month: "May", cost: 0 },
    { month: "Jun", cost: 0 },
    { month: "Jul", cost: 0 },
    { month: "Aug", cost: 0 },
    { month: "Sep", cost: 0 },
    { month: "Oct", cost: 0 },
    { month: "Nov", cost: 0 },
    { month: "Dec", cost: 0 },
  ];

  const data2 = [
    { date: "2022-03-1", cost: 40, utilityusage: 170 },
    { date: "2022-03-2", cost: 70, utilityusage: 172 },
    { date: "2022-03-3", cost: 80, utilityusage: 171 },
    { date: "2022-03-4", cost: 75, utilityusage: 175 },
    { date: "2022-03-5", cost: 85, utilityusage: 160 },
    { date: "2022-03-6", cost: 90, utilityusage: 166 },
    { date: "2022-03-7", cost: 70, utilityusage: 160 },
    { date: "2022-03-8", cost: 80, utilityusage: 180 },
    { date: "2022-03-9", cost: 90, utilityusage: 160 },
    { date: "2022-03-10", cost: 80, utilityusage: 190 },
    { date: "2022-03-11", cost: 70, utilityusage: 160 },
    { date: "2022-03-12", cost: 80, utilityusage: 174 },
    { date: "2022-03-13", cost: 80, utilityusage: 150 },
    { date: "2022-03-14", cost: 75, utilityusage: 145 },
    { date: "2022-03-15", cost: 85, utilityusage: 179 },
    { date: "2022-03-16", cost: 90, utilityusage: 173 },
    { date: "2022-03-17", cost: 70, utilityusage: 170 },
    { date: "2022-03-18", cost: 90, utilityusage: 160 },
    // { date: "2022-03-19", cost: 70, utilityusage: 190 },
    // { date: "2022-03-20", cost: 80, utilityusage: 170 },
    // { date: "2022-03-21", cost: 85, utilityusage: 160 },
    // { date: "2022-03-22", cost: 75, utilityusage: 160 },
    // { date: "2022-03-23", cost: 80, utilityusage: 160 },
    // { date: "2022-03-24", cost: 80, utilityusage: 160 },
    // { date: "2022-03-25", cost: 90, utilityusage: 160 },
    // { date: "2022-03-26", cost: 75, utilityusage: 160 },
    // { date: "2022-03-27", cost: 95, utilityusage: 160 },
    // { date: "2022-03-28", cost: 70, utilityusage: 160 },
    // { date: "2022-03-29", cost: 95, utilityusage: 160 },
    // { date: "2022-03-30", cost: 85, utilityusage: 160 },
  ];
  const [data3, setData3] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [utilityCostsRes, pvsRes] = await Promise.all([
        axios("http://localhost:5000/utilitycost"),
        axios("http://localhost:5000/pvs"),
      ]);

      const options = { day: "2-digit", month: "short" };

      const utilityCosts = utilityCostsRes.data.map((item) => ({
        tanggal: new Date(item.createdAt)
          .toLocaleDateString("en-GB", options)
          .replace(/\//g, "-"),
        utility_usage:
          parseFloat(item.total_cost.replace(/,/g, "").replace(/\..*/, ".")) /
          10,
      }));

      const pvs = pvsRes.data.map((item) => ({
        tanggal: new Date(item.createdAt)
          .toLocaleDateString("en-GB", options)
          .replace(/\//g, "-"),
        cost: Number(item.persen_utilitycost),
      }));

      const mergedData = utilityCosts.map((item) => ({
        ...item,
        cost: pvs.find((pv) => pv.tanggal === item.tanggal)?.cost || null,
      }));

      setData3(mergedData);
    };

    fetchData();
  }, []);

  // const [data4, setData4] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/costperbulan");
  //       setData4(parseFloat(response.data[0].total_cost.replace(/\./g, ""))); // Mengubah string menjadi number dan menghapus tanda titik pada string
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [perhariini, setPerharini] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/utilitycost");
      const data = response.data;
      let sum = 0;
      data.forEach((item) => {
        const totalCost = parseFloat(item.total_cost.replace(/\./g, ""));
        sum += totalCost;
      });
      setPerharini(sum);
    }

    fetchData();
  }, []);

  const [persenperhariini, setPersenperhariini] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/pvs");
      const data = response.data;
      let sum = 0;
      data.forEach((item) => {
        const totalpersen = parseFloat(item.persen_utilitycost);
        sum += totalpersen;
      });
      const average = sum / data.length;
      setPersenperhariini(average.toFixed(1));
    }

    fetchData();
  }, []);

  //jumlah data hanya perbulan
  const [perbulanini, setPerbulanni] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/utilitycost");
      const data = response.data;
      let sum = 0;
      data.forEach((item) => {
        const createdAt = new Date(item.createdAt);
        if (createdAt.getMonth() === 2) {
          // March is month 2 (0-based index)
          const totalCost = parseFloat(item.total_cost.replace(/\./g, ""));
          sum += totalCost;
        }
      });
      setPerbulanni(sum);
    }

    fetchData();
  }, []);

  console.log(perbulanini);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [report, setReport] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    const response = await axios.get("http://localhost:5000/utilitycost");
    setReport(response.data);
  };

  return (
    <div>
      <div className="level-right">
        <div className="level">
          <div className="box">
            <div className="level-item">
              <div className=" is-size-5 pr-5 has-text-weight-semibold has-text-grey">
                <CurrentDate />
              </div>
              <div className="level-item">
                <div className=" is-size-5 pr-5 has-text-weight-semibold has-text-grey">
                  <Clock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item pb-1">
        <div>
          <div className="has-text-centered has-text-centered is-size-4 has-text-weight-bold is-family-primary">
            UTILITY COST 2023
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column" style={{ height: "300px" }}>
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <figure className="image 100x100">
                    <img src={myImage} alt="My Image" />
                  </figure>
                </div>
                <div className="box has-text-centered is-size-6">
                  <h1 className="has-text-weight-bold ">PIC UTILITY</h1>
                </div>
                <h3 className="has-text-centered is-size-6 is-family-primary has-text-weight-bold">
                  Pak SUYUD
                </h3>
                <h3 className="has-text-centered is-size-6 is-family-primary has-text-weight-bold">
                  608
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-two-thirds">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div>
                  <p className="title is-size-5 has-text-grey">
                    MONTHLY UTILITY COST
                  </p>
                </div>
                <br />
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    width={1300}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis type="number" domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cost" fill="#8884d8">
                      <LabelList
                        valueAccessor={(props) => {
                          const { value } = props;
                          return Array.isArray(value)
                            ? value[1] - value[0]
                            : value;
                        }}
                        position={"top"}
                      />
                    </Bar>
                    <ReferenceLine
                      y={4}
                      stroke="red"
                      strokeWidth={4}
                      label={{
                        cost: "Target 60",
                        position: "left",
                        fill: "red",
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="column" style={{ height: "250px" }}>
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="box has-text-centered">
                  <h1 className="has-text-weight-bold is-family-primary ">
                    PERHARI INI
                  </h1>
                </div>
                <div className="box has-background-warning has-text-centered has-text-weight-bold is-family-primary">
                  UTILITY USAGE
                </div>
                <p className="has-text-centered has-text-weight-bold is-family-primary is-size-5">
                  {perhariini && `Rp ${perhariini.toLocaleString("id-ID")}`}
                </p>
                <br />
                <div className="box has-background-info has-text-centered has-text-weight-bold is-family-primary">
                  %COST
                </div>
                <p className="has-text-centered has-text-weight-bold is-size-5">
                  {persenperhariini}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns ">
        <div className="column">.</div>
        <div className="column is-two-thirds">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div>
                  <p className="title is-size-5 has-text-grey">
                    DAILY UTILITY COST
                  </p>
                </div>
                <br />
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart
                    width={500}
                    height={400}
                    data={data3.slice(-12)}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    {/* <CartesianGrid stroke="#f5f5f5" /> */}
                    <Bar dataKey="cost" fill="#8884d8">
                      <LabelList
                        valueAccessor={(props) => {
                          const { value } = props;
                          return Array.isArray(value)
                            ? value[1] - value[0]
                            : value;
                        }}
                        position={"top"}
                      />
                    </Bar>
                    <Line
                      type="monotone"
                      dataKey="utility_usage"
                      stroke="#DAA520"
                      strokeWidth={3}
                      legendType="rect"
                    >
                      <LabelList
                        valueAccessor={(props) => {
                          const { value } = props;
                          return Array.isArray(value)
                            ? (value[1] - value[0]) * 10
                            : value * 10;
                        }}
                        position={"top"}
                      />
                    </Line>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tanggal" />

                    <YAxis type="number" domain={[0, 20]} />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine
                      y={4}
                      stroke="red"
                      strokeWidth={4}
                      label={{
                        cost: "Target 60",
                        position: "left",
                        fill: "red",
                      }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <button
            className="button is-link is-medium"
            onClick={() => setIsModalOpen(true)}
          >
            Lihat Table
          </button>
          <div className="container">
            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
            >
              <div class="modal-card-width">
                <header class="modal-card-head">
                  <p class="modal-card-title has-text-centered has-text-weight-bold">
                    Table Cost Utility Per Hari Dalam Rupiah
                  </p>
                  <button
                    class="delete"
                    aria-label="close"
                    onClick={() => setIsModalOpen(false)}
                  ></button>
                </header>
                <section className="modal-card-body">
                  <table className="table is-bordered is-fullwidth is-hoverable is-striped ">
                    <thead>
                      <tr>
                        <th className="has-text-centered is-selected">No</th>
                        <th className="has-text-centered is-selected">Gas </th>
                        <th className="has-text-centered is-selected">
                          Listrik
                        </th>
                        <th className="has-text-centered is-selected">Air</th>
                        <th className="has-text-centered is-selected">
                          Total Cost
                        </th>
                        <th className="has-text-centered is-selected">
                          Tanggal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.map((report, index) => {
                        let date = new Date(report["createdAt"]);
                        return (
                          <tr
                            className="has-text-centered is-hoverable has-text-weight-bold"
                            key={report.id}
                          >
                            <td className="has-text-centered is-hoverable has-text-weight-bold">
                              {index + 1}
                            </td>
                            <td className="has-text-centered is-hoverable has-text-weight-bold">
                              {report.listrik_usage}
                            </td>
                            <td className="has-text-centered is-hoverable has-text-weight-bold">
                              {report.gas_usage}
                            </td>
                            <td className="has-text-centered is-hoverable has-text-weight-bold">
                              {report.air_usage}
                            </td>
                            <td className="has-text-centered is-hoverable has-text-weight-bold">
                              {report.total_cost}
                            </td>
                            <td className="has-text-centered is-hoverable has-text-weight-bold">
                              {date.toLocaleDateString("id-ID", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                              })}
                            </td>
                            {/* <td>{report.createdAt}</td> */}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </section>
                <footer className="modal-card-foot">
                  <button className="button is-link is-medium">Edit</button>
                  <button
                    className="button is-medium"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </footer>
              </div>
            </ReactModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartUtility;
