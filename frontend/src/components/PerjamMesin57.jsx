import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "No",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Energy Consumption",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Daya Total",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tanggal",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
];

const PerjamMesin57 = () => {
  return (
    <div>
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>Machine 57</strong>
                </p>
              </div>
              <div className="level-item">
                <div className="field has-addons">
                  <p className="control"></p>
                  <p className="control"></p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="level-right">
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>Details</strong>
                </p>
              </div>
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>Average</strong>
                </p>
              </div>
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>Report</strong>
                </p>
              </div>
              <div className="level-item">
                <p className="subtitle is-5">
                  <strong>.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
};

export default PerjamMesin57;
