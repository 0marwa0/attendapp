import React, { Component } from "react";
import "antd/dist/antd.css";
import QrReader from "react-qr-reader";
import { Table, Tag, Space } from "antd";
import { ReactComponent as RQ } from "./qr.svg";
import "./App.css";
const stu = ["marwa", "amna"];
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Attend",
    dataIndex: "attend",
    key: "attend",
  },
  {
    title: "Grad",
    dataIndex: "grad",
    key: "address",
  },
  {
    title: "Group",
    key: "tags",
    dataIndex: "group",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const dataApp = [
  {
    key: "1",
    name: "amna",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
  {
    key: "2",
    name: "marwa",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
];
class App extends Component {
  state = {
    result: "No One",
    sourceData: [],
  };

  handleScan = (data) => {
    if (data) {
      dataApp.map((i) => {
        if (i.name === data) {
          console.log("its there", dataApp);
          i.attend = 1;
          this.setState({ sourceData: dataApp });
        }
      });
    }

    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };

  componentDidMount() {
    // let x = [546];
    // x = x.toString(10).replace(/\D/g, "0").split("").map(String);
    // let count = "";

    // for (let i = 0; i < x.length; i++) {
    //   count = x[i] + count;
    //   x[i] = count;
    //   console.log(i);
    // }
    // console.log(x);
    // // console.log(year);
    // // console.log(x, "num");
    this.setState({ sourceData: dataApp });
  }

  render() {
    return (
      <div className="app_leyout">
        <div className="Rq_warrper">
          <QrReader
            delay={300}
            onError={this.handleError}
            onLoad={(e) => console.log(e, "on load")}
            onScan={this.handleScan}
            style={{ width: "100%", heihgt: "40%" }}
          />
          <RQ className="svgicon" />
        </div>
        <div style={{ width: "700px" }}>
          <Table columns={columns} dataSource={this.state.sourceData} />
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default App;
