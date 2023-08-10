"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, styled, Divider } from "@mui/material";
import Countdown from "react-countdown";
import Carousel from "react-multi-carousel";


const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  display: flex;
  padding: 15px 20px;
`;
const Timer = styled(Box)`
  color: #7f7f7f;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  // background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
`;

const Texts = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
};

const Product = ({title,timer}) => {
  const [prodcuts, setProdcuts] = useState([]);
  console.log("TTTTTTTTT", prodcuts);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3001/products");
    setProdcuts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  return (
    <>
      <Component>
        <Deal>
          <DealText>{title}</DealText>
          {
            timer && <Timer>
            <img src={timerURL} alt="" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
          }
          
          <ViewAllButton
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#2874f0" }}
          >
            View All
          </ViewAllButton>
        </Deal>
        <Divider />
        <Carousel
          responsive={responsive2}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          centerMode={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {prodcuts.map((el, i) => (
            <Box key={i} textAlign="center" style={{ padding: "25px 15px" }}>
              <img
                src={el.image}
                alt=""
                style={{ width: "auto", height: 150, paddingLeft: "40px" }}
              />
              <Texts style={{ fontWeight: 600, color: "#212121" }}>
                {el.name}
              </Texts>
              <Texts style={{ color: "green" }}>₹ {el.price}</Texts>
              <Texts style={{ color: "#212121", opacity: ".6" }}>
                {el.description}
              </Texts>
            </Box>
          ))}
        </Carousel>
      </Component>
    </>
  );
};

export default Product;
