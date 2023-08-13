"use client";
import React, { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Dailog from "../loginDialog/page";
// import { DataContext } from "../context/dataProvider";
import axios from "axios";

const HeadBar = styled(AppBar)`
     background: #2874f0
     height:55px
`;
const BoxTag = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const TypoPlus = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const ImputContainer = styled(Box)`
  background: #fff;
  width: 37%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSerach = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
`;
const SearchIconBox = styled(Box)`
  color: #2874f0;
  padding: 5px;
`;
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 45px;
    align-items: center;
  }
  font-size: 14px;
`;
const CartContainer = styled(Box)`
  display: flex;
`;
const LoginButton = styled(Button)`
  // background-color: #fff;
  color: #2874f0;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
`;

const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  console.log("Query", query);

  const OpenDialog = () => {
    setOpen(true);
  };

  const handelSendData = () => {
    // try{
    //   axios.get(`http://localhost:3001/products/?name=${el}`)
    // }catch(err){
    //   console.log(err.message);
    // }
    props.sendDataToParent(query);
  };

  return (
    <div className="">
      <HeadBar>
        <Toolbar>
          <BoxTag>
            <img src={logoURL} className="w-[75px]" />
            <Box>
              <TypoPlus>
                Explore&nbsp;
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus+
                </Box>
              </TypoPlus>
            </Box>
          </BoxTag>
          <ImputContainer>
            <InputSerach
              placeholder="Search for products and more"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchIconBox>
              <SearchIcon onClick={handelSendData} />
            </SearchIconBox>
          </ImputContainer>
          <Wrapper>
            {/* {account? <Typography>{account.name}</Typography>
            :   */}
            <LoginButton
              style={{ backgroundColor: "#fff" }}
              variant="contained"
              onClick={() => OpenDialog()}
            >
              Login
            </LoginButton>
            {/* // } */}

            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
            <CartContainer>
              <ShoppingCartOutlinedIcon />
              <Typography>Cart</Typography>
            </CartContainer>
          </Wrapper>
          <Dailog open={open} setOpen={setOpen} />
        </Toolbar>
      </HeadBar>
    </div>
  );
};

export default Navbar;
