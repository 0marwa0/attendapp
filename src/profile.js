import "./Nav.css";
import marwa from "./marwa.jpg";
import React, { useState } from "react";
import { Table, Tag, Space } from "antd";
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
];

function Student() {
  const [data, setData] = useState(dataApp);
  return (
    <div className="profile-page">
      <div>
        <img src={marwa} className="profileImage" />
      </div>
      <Table columns={columns} dataSource={data} style={{ width: "600px" }} />
    </div>
  );
}
export default Student;
