import React, { FC, useState } from 'react';
import './style/ItemContainer.css';
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';

interface Props {
  num: number;
}
type TextConfig = {
  [key: number]: {
    index: string;
    title: string;
    bgColor: string;
  }
}
const textConfig: TextConfig = {
  1: {
    index: "01",
    title: "No Poverty",
    bgColor: "231,50,46"
  }
  ,
  2: {
    index: "02",
    title: "Zero Hunger",
    bgColor: "207, 168, 56"
  }
  ,
  3: {
    index: "03",
    title: "Good Health and Good Being",
    bgColor: "71, 155, 69"
  }
  ,
  4: {
    index: "04",
    title: "Quality Education",
    bgColor: "192, 41, 27"
  }
  ,
  5: {
    index: "05",
    title: "Gender Equality",
    bgColor: "232, 51, 35"
  }
  ,
  6: {
    index: "06",
    title: "Clean Water and Sanitation",
    bgColor: "86, 188, 226"
  }
  ,
  7: {
    index: "07",
    title: "Affordable and Clean Energy",
    bgColor: "246, 200, 68"
  }
  ,
  8: {
    index: "08",
    title: "Decent Work and Economic Growth",
    bgColor: "164, 33, 60"
  }
  ,
  9: {
    index: "09",
    title: "Industry, Innovation and Infrastructure",
    bgColor: "236, 99, 43"
  }
  ,
  10: {
    index: "10",
    title: "Reduced Inequalities",
    bgColor: "236, 99, 43"
  }
  ,
  11: {
    index: "11",
    title: "Susutainable Cities and Communities",
    bgColor: "241, 159, 57"
  }
  ,
  12: {
    index: "12",
    title: "Responsible Consumption and Production",
    bgColor: "190, 142, 54"
  }
  ,
  13: {
    index: "13",
    title: "Climate Action",
    bgColor: "59, 130, 75"
  }
  ,
  14: {
    index: "14",
    title: "Life Below Water",
    bgColor: "65, 147, 215"
  }
  ,
  15: {
    index: "15",
    title: "Life On Land",
    bgColor: "92, 200, 74"
  }
  ,
  16: {
    index: "16",
    title: "Peace, Justice and Strong Institutions",
    bgColor: "42, 100, 155"
  }
  ,
  17: {
    index: "17",
    title: "PartnerShips for the Goals",
    bgColor: "29, 70, 105"
  }
}
const Item: React.FC<Props> = (props) => {
  let id = props.num;
  let { index, title, bgColor } = textConfig[props.num]
  return (
    // このLink tagを打ち分けたい
    <>
      <MediaQuery query="(min-width: 768px)">
        <li className="item" style={{ backgroundColor: `rgb(${bgColor})` }}>
          <Link to={id.toString()}>
            <button>
              <h2 className="index text">{index}</h2>
              <p className="text">{title}</p>
            </button>
          </Link>
        </li>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <li className="item-responsive" style={{ backgroundColor: `rgb(${bgColor})` }}>
          <Link to={id.toString()}>
            <h3 className="index text">{index}</h3>
            <p className="text">{title}</p>
          </Link>
        </li>
      </MediaQuery>
    </>
  )

}

export default Item
