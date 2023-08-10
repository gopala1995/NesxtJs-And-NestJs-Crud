import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  Typography,
  styled,
  Alert,
} from "@mui/material";
import axios from "axios";
import React, { useState, useContext } from "react";
import { DataContext } from "../context/dataProvider";

const Component = styled(DialogContent)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 40%;
  height: 100%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;
const signupInitialValues = {
  name: "",
  email: "",
  password: "",
};
const loginInitialValues = {
  email: "",
  password: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const Dailog = ({ open, setOpen, props }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [error, showError] = useState(false);
  const [signUp, setSignUp] = useState(signupInitialValues);
  const [logIn, setLogin] = useState(loginInitialValues);
  const [logInData, setLoginData] = useState([]);
  // const [setAccount] = useContext(DataContext);
  console.log("User Is LoggedIn", logInData);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    // console.log(signUp);
  };
  const onValueChange = (e) => {
    setLogin({ ...logIn, [e.target.name]: e.target.value });
    // console.log(logIn);
  };

  const signupUser = async () => {
    const res = await axios.post("http://localhost:3001/auth/signup", signUp);
    if (!res) return;
    toggleAccount(accountInitialValues.login);
  };

  const loginUser = async () => {
    const res = await axios.post("http://localhost:3001/auth/login", logIn);
    setLoginData(res.data);
    // console.log("RRRRRRRRR", res);
    if (res.status !== 201) {
      showError(true);
    } else{
      handleClose();
      // setAccount(logIn.name);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="email"
                label="Enter Email"
              />
              {error && (
                <Error>Please enter valid Email ID/Mobile number</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton
                style={{ backgroundColor: "#fb641b" }}
                onClick={() => loginUser()}
              >
                Login
              </LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="name"
                label="Enter Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <LoginButton
                style={{ backgroundColor: "#fb641b" }}
                onClick={() => signupUser()}
              >
                Continue
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default Dailog;
