// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// // import io from "socket.io-client";
// // const socket = io.connect("http://localhost:3300");

// const PageReportHour = () => {
//   //coba get data dan post data setiap jam 9
//   // const getDatadaya = () => {
//   //   axios
//   //     .get("http://localhost:3300/daya/1")
//   //     .then((response) => {
//   //       const data = response.data;

//   //       axios
//   //         .post("http://localhost:3300/perjam", data)
//   //         .then((response) => {
//   //           console.log(response);
//   //         })
//   //         .catch((error) => {
//   //           console.log(error);
//   //         });
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // };

//   // useEffect(() => {
//   //   const now = new Date();

//   //   // Schedule for 09.00, 10.00, and 11.00
//   //   const scheduledTimes = [
//   //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0),
//   //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0),
//   //     new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0, 0),
//   //   ];

//   //   scheduledTimes.forEach((scheduledTime) => {
//   //     // If it's past the scheduled time, schedule it for tomorrow
//   //     if (now > scheduledTime) {
//   //       scheduledTime.setDate(scheduledTime.getDate() + 1);
//   //     }

//   //     const delay = scheduledTime.getTime() - now.getTime();

//   //     const timerId = setTimeout(() => {
//   //       getDatadaya();
//   //       setInterval(() => {
//   //         getDatadaya();
//   //       }, 3600000); // Call the API every hour after the first call
//   //     }, delay);

//   //     return () => {
//   //       clearTimeout(timerId);
//   //     };
//   //   });
//   // }, []);

//   //=========================================================================

//   // const [data3, setData3] = useState([]);

//   // useEffect(() => {
//   //   // Set interval untuk menjalankan fungsi pengambilan data setiap pukul 4 sore
//   //   const interval = setInterval(() => {
//   //     const now = new Date();
//   //     if (
//   //       now.getHours() === 16 &&
//   //       now.getMinutes() === 0 &&
//   //       now.getSeconds() === 0
//   //     ) {
//   //       axios
//   //         .get("http://localhost:3300/daya")
//   //         .then((response) => {
//   //           setData3(response.data);
//   //         })
//   //         .catch((error) => {
//   //           console.log(error);
//   //         });
//   //     }
//   //   }, 1000); // Interval waktu 1 detik

//   //   // Clear interval saat komponen di-unmount
//   //   return () => clearInterval(interval);
//   // }, []);

//   // const [data2, setData2] = useState([]);

//   // useEffect(() => {
//   //   socket.on("data2", (newData) => {
//   //     setData2((prevData) => [...prevData, newData]);
//   //   });
//   // }, []);

//   // const [data_perjam, setDataperjam] = useState([]);

//   // useEffect(() => {
//   //   getDataperjam();
//   // }, []);

//   // const getDataperjam = async () => {
//   //   const response = await axios.get("http://localhost:3300/perjam");
//   //   setDataperjam(response.data);
//   // };

//   // const deleteDataperjam = async (id) => {
//   //   try {
//   //     await axios.delete(`http://localhost:3300/perjam/${id}`);
//   //     getDataperjam();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   return (
//     <div>
//       <h1 className="title">Data Per Jam</h1>
//       <h2 className="subtitle">Select Date :</h2>
//       <p>
//         Data setiap jam 4 sore
//         <div>
//           {/* Menampilkan data pada tampilan */}
//           {data3.map((item) => (
//             <div key={item.id}>{item.daya}</div>
//           ))}
//         </div>
//       </p>
//       <LineChart width={600} height={300} data={data2}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="timestamp" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="value" stroke="#8884d8" />
//       </LineChart>
//       <table className="table is-hoverable is-fullwidth is-bordered table-background-color">
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>JAM</th>
//             <th>SDB</th>
//             <th>DAYA</th>
//             <th>TANGGAL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data_perjam.map((perjam, index) => (
//             <tr key={perjam.id}>
//               <td>{index + 1}</td>
//               <td>{perjam.jam}</td>
//               <td>{perjam.sdb}</td>
//               <td>{perjam.daya}</td>
//               <td>{perjam.created_on}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PageReportHour;

import React from "react";

const PageReportHour = () => {
  return <div>PageReportHour</div>;
};

export default PageReportHour;
