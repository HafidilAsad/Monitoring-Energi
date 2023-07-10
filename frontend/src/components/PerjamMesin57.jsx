import React from "react";
import { Button, Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const PerjamMesin57 = () => {
  const [report57, setReport57] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allReports, setAllReport] = useState([]);

  useEffect(() => {
    getReport57();
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const getReport57 = async () => {
    try {
      const response = await axios.get("http://10.14.51.17:5000/report57");
      setReport57(response.data);
      setAllReport(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (date) => {
    let filtered = allReports.filter((report) => {
      let reportDate = new Date(report["createdAt"]);
      return (
        reportDate >= date.selection.startDate &&
        reportDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setReport57(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const [visible] = React.useState(false);

  const [range] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const tableRef = useRef(null);

  return (
    <div>
      <Card
        title="TABLE REPORT PER HOUR"
        extra={
          <DownloadTableExcel
            filename="daily report"
            sheet="reports"
            currentTableRef={tableRef.current}
          >
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              style={{ height: "45px", width: "135px" }}
            >
              DOWNLOAD
            </Button>
          </DownloadTableExcel>
        }
      >
        <div>
          <style>
            {`
                .element-visible { display: block }
                .element-hidden { display: none }
                `}
          </style>
          {/* <button onClick={() => setVisible(!visible)}>{visible ? 'Close Date' : 'Select Date'}</button> */}
          <div className={visible ? "element-visible" : "element-hidden"}>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          </div>
          <p className="is-size-5"> Select Date :</p>
        </div>
        <div className="calendarWrap">
          <input
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
              range[0].endDate,
              "MM/dd/yyyy"
            )}`}
            readOnly
            className="inputBox label"
            onClick={() => setOpen((open) => !open)}
          />

          <div ref={refOne}>
            {open && (
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            )}
          </div>
          <br />

          <table
            className="table  is-hoverable is-bordered is-striped  is-fullwidth"
            ref={tableRef}
          >
            <thead className="">
              <tr>
                <th className="has-text-centered">No</th>
                <th className="has-text-centered">Energy Consumption</th>
                <th className="has-text-centered">Daya Total</th>
                <th className="has-text-centered">Time</th>
                <th className="has-text-centered">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {report57
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // sort by date in reverse order
                .map((report, index) => {
                  let date = new Date(report["createdAt"]);
                  return (
                    <tr key={report.id}>
                      <td className="has-text-centered">{index + 1}</td>
                      <td className="has-text-centered">{report.e_del}</td>
                      <td className="has-text-centered">{report.p_tot}</td>

                      <td className="has-text-centered">
                        {date.toLocaleTimeString("id-ID", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </td>
                      <td className="has-text-centered">
                        {date.toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PerjamMesin57;
