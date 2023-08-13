"use client";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import axios from "axios";

//   import { useNavigate } from "react-router-dom";

const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;

const AddUsers = () => {
  const initial = {
    name: "",
    description: "",
    published: Boolean,
    image: "",
    price: Number,
    rating: Number,
  };

  const [user, setUser] = useState(initial);
  console.log("Updated user", user);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDViY2Q0N2I2MDkzNzlhZDA1NDE0YSIsImlhdCI6MTY5MTcyOTEwOCwiZXhwIjoxNjkxOTg4MzA4fQ.Sf4E6GmepIyGGoVba82Sw9mQfsAJj13r_bljrARPLmk";
  const addUser = async () => {
   await axios.post(`http://localhost:3001/products`, user, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': "Bearer " + token,
      },
    });
  };

  return (
    <div>
      <Form>
        <Typography varient="h4">Add Product</Typography>
        <FormControl>
          <InputLabel>Product's Name</InputLabel>
          <Input name="name" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Description</InputLabel>
          <Input name="description" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Image Url</InputLabel>
          <Input name="image" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Price</InputLabel>
          <Input name="price" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Rating</InputLabel>
          <Input name="rating" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="published"
                value={true}
                onChange={(e) => onValueChange(e)}
              />
            }
            label="Published"
          />
        </FormControl>
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="published"
                value={false}
                onChange={(e) => onValueChange(e)}
              />
            }
            label="Not Published"
          />
        </FormControl>
        <FormControl>
          <Button
            onClick={() => addUser()}
            style={{ background: "#2874f0" }}
            variant="contained"
          >
            Add User
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};

export default AddUsers;
