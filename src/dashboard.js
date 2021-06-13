import NavBar from "./navBar";
import { Modal } from "antd";
import { Button, notification } from "antd";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React, { Component, useState } from "react";
import "antd/dist/antd.css";
import { store } from "react-notifications-component";
import QrReader from "react-qr-reader";
import { Table, Tag, Space } from "antd";
import { ReactComponent as RQ } from "./qr.svg";
import Student from "./profile";
import "./App.css";
import StarRatings from 'react-star-ratings';


let m = ["mmmmmarwa", "jawad"].filter(function (item, pos, self) {
  console.log(pos, self, item, "dom dom");
});

const dataApp = [
  {
    key: "1",
    name: "Ahmed Ail",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
  {
    key: "2",
    name: "Mohmmed Ahmed",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
  {
    key: "1",
    name: "Rana abdallah",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
  {
    key: "2",
    name: "Noor Ali",
    attend: 0,
    grad: "forth",
    group: ["A"],
  },
];
function Dash (){

    const [ rate,setRate]=useState(2)

  const [ sourceData,setsourceData]=useState(dataApp)
  const changeRating=( newRating, name )=> {
 setRate(newRating
    )
  }



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
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
          <StarRatings
          rating={rate}
         
          starRatedColor="gold"
          changeRating={changeRating}
          numberOfStars={6}
          size="10px"
          name='rating'
        />
      ),
    },
  ];
    return (
      <div>
        {/* <NavBar search={this.handleOk} /> */}
 
         
               <Table columns={columns} dataSource={sourceData} />
              {/* <p>{this.state.result}</p> </div> */}
            <div style={{ padding:"50px" ,display:"flex",gap:"10px"}}>
             <div  className="infoPanl">
         <div>Total attend : <b>22</b></div>
        <div>Total absence : <b>55</b></div>
        <Button className="customBtn">Print</Button><Button className="customBtn">Download</Button>
    </div>
           
      </div></div>
    );
  }


export default Dash;
