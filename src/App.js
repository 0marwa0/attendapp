import NavBar from "./navBar";
import { Modal } from "antd";

import { Button, notification } from "antd";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React, { Component } from "react";
import "antd/dist/antd.css";
import { store } from "react-notifications-component";
import QrReader from "react-qr-reader";
import { Table, Tag, Space } from "antd";
import { ReactComponent as RQ } from "./qr.svg";
import Student from "./profile";
import "./App.css";
const key = "updatable";
const stu = ["alert", "amna"];
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
let m = ["mmmmmarwa", "jawad"].filter(function (item, pos, self) {
  console.log(pos, self, item, "dom dom");
});

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
    name: "alert",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
];
class App extends Component {
  state = {
    visible: false,
    showStudent: false,
    confirmLoading: false,
    modalText: false,
    result: "No One",
    sourceData: [],
  };
  do = (ar) => {
    console.log("it workling");
    NotificationManager.info("Info message");
  };
  createNotification = (type) => {
    return () => {
      NotificationManager.error("Error message", "Click me!", 5000, () => {
        alert("callback");
      });
      //       break;
      //   }
    };
  };

  openNotification = () => {
    return () => {
      NotificationManager.error("Not found !", "Click me!", 5000, () => {
        alert("callback");
      });
    };
  };

  showSuccess = () => {
    NotificationManager.success("Done", "Click me!", 5000, () => {
      alert("callback");
    });
  };
  handleScan = (data) => {
    if (data) {
      dataApp.map((i) => {
        if (i.name === data) {
          console.log("its there", dataApp);
          i.attend = 1;
          this.show();
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

  setConfirmLoading = () => {
    this.setState({ confirmLoading: true });
  };
  setModalText = () => {};

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    // this.setState({ confirmLoading: true });
    // setTimeout(() => {
    this.setState({ visible: true });
    //   this.setState({ confirmLoading: true });
    // }, 2000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
    console.log("Clicked cancel button");
  };
  test = (arg) => {
    console.log(
      arg.reduce((i, x) => i + x),
      "ttt",
      typeof arg
    );
  };

  componentDidMount() {
    this.setState({ sourceData: dataApp });
  }

  showStudentbtn = (data) => {
    if (data) {
      this.setState({ showStudent: true, visible: false });
    }
  };
  render() {
    return (
      <div>
        <NavBar search={this.handleOk} />
        <NotificationContainer />
        {this.state.showStudent ? (
          <Student />
        ) : (
          <div className="app_leyout">
            <div className="Rq_warrper">
              <QrReader
                onError={this.handleError}
                onLoad={(e) => console.log(e, "on load")}
                onScan={this.handleScan}
                style={{ width: "100%", heihgt: "100", borderRadius: "10px" }}
              />
              <div id="toasts"></div>
              <RQ className="svgicon" />
            </div>
            <div style={{ width: "700px" }}>
              <Table columns={columns} dataSource={this.state.sourceData} />
              <p>{this.state.result}</p>
            </div>
            <Modal
              title={false}
              visible={this.state.visible}
              centered={true}
              onOk={false}
              // bodyStyle={{
              //   backgroundColor: "white",
              //   width: "600px",
              //   heihgt: "300px",
              //   padding: "20px",
              // }}
              footer={false}
              confirmLoading={this.state.confirmLoading}
              onCancel={this.handleCancel}>
              {" "}
              <QrReader
                onError={this.handleError}
                onLoad={(e) => console.log(e, "on load")}
                onScan={this.showStudentbtn}
                style={{ width: "100%", heihgt: "100" }}
              />
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

export default App;
