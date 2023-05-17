//import { useState } from "react";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
//import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../components/css/welcome.css";

//menambahkan depedency socket io cient
// import io from "socket.io-client";

function DashboardBackup() {
  //Coba Console Axios==============================================================================================================

  // axios
  //   .get("http://localhost:3300/daya")
  //   .then((response) => {
  //     // Handle the response data
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     // Handle the error
  //     console.error(error);
  //   });

  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }

  // const [sdb, setSdb] = useState([]);

  //Ini Untuk Postgre
  // useEffect(() => {
  //   const socket = io("http://localhost:3300");
  //   //fetch initial data
  //   const getSdb = async () => {
  //     const result = await axios.get("http://localhost:3300/daya");
  //     setSdb(result.data);
  //   };

  //   getSdb();
  //   //Handle Update data Socketio
  //   socket.on("update", (data) => {
  //     setSdb(data);
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // });

  const data = [
    {
      jam: "07.00",
      tegangan: 380,
      kwh: 800,
      arus: 1400,
      cnt: 490,
    },
    {
      jam: "08.00",
      tegangan: 380,
      kwh: 967,
      arus: 1506,
      cnt: 590,
    },
    {
      jam: "09.00",
      tegangan: 380,
      kwh: 1098,
      arus: 989,
      cnt: 350,
    },
    {
      jam: "10.00",
      tegangan: 380,
      kwh: 1200,
      arus: 1228,
      cnt: 480,
    },
    {
      jam: "11.00",
      tegangan: 380,
      kwh: 1108,
      arus: 1100,
      cnt: 460,
    },
    {
      jam: "12.00",
      tegangan: 380,
      kwh: 680,
      arus: 600,
      cnt: 380,
    },
    {
      jam: "13.00",
      tegangan: 380,
      kwh: 1098,
      arus: 989,
      cnt: 350,
    },
    {
      jam: "14.00",
      tegangan: 380,
      kwh: 1200,
      arus: 1228,
      cnt: 480,
    },
    {
      jam: "15.00",
      tegangan: 380,
      kwh: 1108,
      arus: 1100,
      cnt: 460,
    },
    {
      jam: "16.00",
      tegangan: 380,
      kwh: 680,
      arus: 1700,
      cnt: 380,
    },
  ];
  return (
    <div className="App">
      <div>
        <div className="px-4 pt-4 ">
          <div className="select  is-left ">
            <select onChange={(event) => handleChange(event.target.value)}>
              <option>Select Panel SDB</option>
              <option value="users">Panel SDB1</option>

              <option value="sdb2">Panel SDB2</option>

              <option>Panel SDB3</option>
              <option>Panel SDB4</option>
              <option>Panel SDB5</option>
              <option>Panel SDB6</option>
              <option>Panel SDB7</option>
              <option>Panel SDB8</option>
              <option>Panel SDB9</option>
              <option>Panel SDB10</option>
              <option>Panel SDB11</option>
              <option>Panel SDB12</option>
              <option>Panel SDB13</option>
              <option>Panel SDB14</option>
              <option>Panel SDB15</option>
              <option>Panel SDB16</option>
              <option>Panel SDB17</option>
              <option>Panel SDB18</option>
              <option>Panel SDB19</option>
              <option>Panel SDB20</option>
              <option>Panel SDB21</option>
              <option>Panel SDB22</option>
              <option>Panel SDB23</option>
              <option>Panel SDB24</option>
              <option>Panel SDB25</option>
              <option>Panel SDB26</option>
              <option>Panel SDB27</option>
              <option>Panel SDB28</option>
              <option>Panel SDB29</option>
              <option>Panel SDB30</option>
              <option>Panel SDB31</option>
              <option>Panel SDB32</option>
              <option>Panel SDB33</option>
              <option>Panel SDB34</option>
              <option>Panel SDB35</option>
              <option>Panel SDB36</option>
              <option>Panel SDB37</option>
              <option>Panel SDB38</option>
              <option>Panel SDB39</option>
              <option>Panel SDB40</option>
              <option>Panel SDB41</option>
              <option>Panel SDB42</option>
              <option>Panel SDB43</option>
              <option>Panel SDB44</option>
              <option>Panel SDB45</option>
              <option>Panel SDB46</option>
              <option>Panel SDB47</option>
              <option>Panel SDB48</option>
              <option>Panel SDB49</option>
              <option>Panel SDB50</option>
              <option>Panel SDB51</option>
              <option>Panel SDB52</option>
              <option>Panel SDB53</option>
              <option>Panel SDB54</option>
              <option>Panel SDB55</option>
              <option>Panel SDB56</option>
              <option>Panel SDB57</option>
              <option>Panel SDB58</option>
              <option>Panel SDB59</option>
              <option>Panel SDB60</option>
              <option>Panel SDB61</option>
            </select>
          </div>
        </div>
        {/* Car */}
        <section className="section px-1">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-double">
                <div className="card">
                  <div className="card-content">
                    <div className="has-text-centered">
                      <p className="title is-size-5">
                        Daya SDB1 Kompresor Barat
                      </p>
                      {/* {sdb
                        .filter(({ id }) => id === 1)
                        .map((item) => ( */}
                      <p className="title is-size-1 has-text-link blink ">
                        100
                        <span className="title is-size-3">k WH</span>
                      </p>
                      {/* ))} */}
                    </div>
                    <br />
                    <div className="has-text-centered">
                      <div className="content"> satuan dalam KWH</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2=================================================================================== */}
              <div className="column is-one-double">
                <div className="card">
                  <div className="card-content">
                    <div className="has-text-centered">
                      <p className="title is-size-5">
                        Tegangan SDB1 Kompresor Barat
                      </p>
                      <p className="title is-size-1 has-text-link ">
                        <span className="blink">
                          380 <span className="title is-size-3">V</span>
                        </span>
                      </p>
                    </div>
                    <br />
                    <div className="has-text-centered">
                      <div className="content"> satuan dalam Volt</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3=================================================================================== */}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="has-text-centered">
                <p className="title is-size-5">Analisa Grafik Per Hari</p>
              </div>
              <div className="chart">
                <ResponsiveContainer width={1200} height={300}>
                  <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="jam" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="arus"
                      fill="#8884d8"
                      stroke="#8884d8"
                    />
                    <Bar dataKey="kwh" barSize={40} fill="#413ea0" />
                    <Line
                      type="monotone"
                      strokeWidth={2}
                      dataKey="tegangan"
                      stroke="#ff7300"
                    />
                    {/* <Scatter dataKey="cnt" fill="red" /> */}
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBackup;
