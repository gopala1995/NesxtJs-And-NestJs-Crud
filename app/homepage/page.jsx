"use client";
import { Box, Typography, Button, styled, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BannerData } from "@/data/data";
import { CrouselData } from "@/data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

import Product from "../productapi/page";

const Conatiner = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;
const BannerBox = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Images = styled("img")({
  width: "100%",
  height: 280,
});

const Bannerbox = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
};

const HomePage = () => {
  return (
    <>
      <Conatiner>
        {BannerData.map((el, i) => (
          <BannerBox key={i}>
            <img src={el.url} style={{ width: "70px" }} />
            <Text>{el.text}</Text>
          </BannerBox>
        ))}
      </Conatiner>
      <Bannerbox>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {CrouselData.map((el, i) => (
            <Images src={el.url} alt="Banner" key={i} />
          ))}
        </Carousel>

        <Product title="Suggested Items" timer={true} />
        <Product title="Recommended Items" timer={false} />
        <Product title="Best Styles for you" timer={false} />
        <Product title="Top Collections" timer={false} />
        <Product title="Latest Trends" timer={false} />
      </Bannerbox>
    </>
  );
};

export default HomePage;
