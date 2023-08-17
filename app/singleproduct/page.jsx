"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navbar/page";
import { LoginContext } from "../context/dataprovider";
import axios from "axios";
import { Box, Button, Typography, styled, Grid } from "@mui/material";
import ProductDetail from "../singleDeatils/page";

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
    height:100vh;
`;

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;
const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;

const SignleProduct = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const [data, setData] = useState([]);
  const { search } = useContext(LoginContext);
  console.log("Input data in signle", search);
  console.log("XXXXXXXX", data);

  const SearchData = async () => {
    const res = await axios.get(
      `http://localhost:3001/products/?name=${search}`
    );
    setData(res.data);
  };
  useEffect(() => {
    SearchData();
  }, [search]);

  return (
    <>
      <Navbar />
      <Component>
        {data.map((el) => (
          <Container >
            <Grid item lg={4} md={4} sm={8} xs={12}>
            <LeftContainer>
              <Image src={el.image} />
              <br />
              <StyledButton
                style={{ marginRight: 10, background: "#ff9f00" }}
                variant="contained"
              >
                Add to Cart
              </StyledButton>
              <StyledButton
                style={{ background: "#fb641b" }}
                variant="contained"
              >
                {" "}
                Buy Now
              </StyledButton>
            </LeftContainer>
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <Typography>{el.name}</Typography>
              <Typography
                style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
              >
                8 Ratings & 1 Reviews
                <span>
                  <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
                </span>
              </Typography>
              <Typography>
                <span style={{ fontSize: 28 }}>₹{el.price}</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#878787" }}>
                  <strike>₹{el.price}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>{el.description} off</span>
              </Typography>
              <ProductDetail />
            </RightContainer>
          </Container>
        ))}
      </Component>
    </>
  );
};

export default SignleProduct;
