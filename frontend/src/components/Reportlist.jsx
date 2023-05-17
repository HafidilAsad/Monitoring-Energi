import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { DownloadTableExcel } from "react-export-table-to-excel";

const Reportlist = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [allReports, setAllReport] = useState([]);

  const [report, setReport] = useState([]);

  useEffect(() => {
    getReports();
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const getReports = async () => {
    const response = await axios.get("http://localhost:5000/reports");
    setReport(response.data);
    setAllReport(response.data);
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
    setReport(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // const [visible, setVisible] = React.useState(false);
  const [visible] = React.useState(false);

  // date state
  //const [range, setRange] = useState([
  const [range] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  //open close
  const [open, setOpen] = useState(false);

  //get the element to toogle
  const refOne = useRef(null);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const tableRef = useRef(null);
  return (
    <div>
      <div className="field-body">
        <div className="field">
          <div className="label is-size-5">Report Gas Perhari</div>
        </div>
        <div className="field">
          {/* <div className="label is-size-5w">Select Date :</div> */}
        </div>
      </div>
      <div>
        <style>
          {`
                .element-visible { display: block }
                .element-hidden { display: none }
                `}
        </style>
        {/* <button onClick={() => setVisible(!visible)}>{visible ? 'Close Date' : 'Select Date'}</button> */}
        <div className={visible ? "element-visible" : "element-hidden"}>
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
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
          className="inputBox"
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
          className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          ref={tableRef}
        >
          <thead className="has-background-grey-light">
            <tr>
              <th>No</th>
              <th>Nama Mesin</th>
              <th>Gas Used</th>
              <th>Gas Consumption</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {report
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // sort by date in reverse order
              .map((report, index) => {
                let date = new Date(report["createdAt"]);
                return (
                  <tr key={report.id}>
                    <td>{index + 1}</td>
                    <td>{report.nama_mesin}</td>
                    <td>{report.gas_used}</td>
                    <td>{report.gas_consumption}</td>
                    <td>
                      {date.toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    {/* <td>{report.createdAt}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>

        <DownloadTableExcel
          filename="daily report"
          sheet="reports"
          currentTableRef={tableRef.current}
        >
          <button className="button is-success"> Download Excel </button>
        </DownloadTableExcel>
      </div>
    </div>
  );
};

export default Reportlist;
