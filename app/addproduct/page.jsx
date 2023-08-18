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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;

const AddUsers = () => {
  const { push } = useRouter();
  const initial = {
    name: "",
    description: "",
    published: Boolean,
    image: "",
    price: Number,
    rating: Number,
  };

  const [product, setProduct] = useState(initial);

  const [token, setToken] = useState();
  console.log("Updated user", product);

  useEffect(() => {
    const SignUpToken = Cookies.get("SignCookies");
    setToken(SignUpToken && JSON.parse(SignUpToken));
  }, []);

  const addUser = async () => {
    const res = await axios.post(`http://localhost:3001/products`, product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res) {
      toast.success("Product added successfully");
      setTimeout(() => {
        push("/");
      }, 2000);
    }
    console.log("Add Product", res);
  };

  return (
    <div>
      <Form>
        <ToastContainer />
        <Typography varient="h4">Add Product</Typography>
        <FormControl>
          <InputLabel>Product's Name</InputLabel>
          <Input
            name="name"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Description</InputLabel>
          <Input
            name="description"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Image Url</InputLabel>
          <Input
            name="image"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Price</InputLabel>
          <Input
            name="price"
            onChange={(e) =>
              setProduct({
                ...product,
                [e.target.name]: parseInt(e.target.value),
              })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Product's Rating</InputLabel>
          <Input
            name="rating"
            onChange={(e) =>
              setProduct({
                ...product,
                [e.target.name]: parseInt(e.target.value),
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="published"
                value={true}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    [e.target.name]: JSON.parse(e.target.value),
                  })
                }
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
                onChange={(e) =>
                  setProduct({
                    ...product,
                    [e.target.name]: JSON.parse(e.target.value),
                  })
                }
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
            Add Product
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};

export default AddUsers;
