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
import React, { useEffect, useState } from "react";

const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditProduct = () => {
  const initial = {
    name: "",
    description: "",
    published: Boolean,
    image: "",
    price: Number,
    rating: Number,
  };

  const [user, setUser] = useState(initial);
  // const navigate = useNavigate()
  // const {id} = useParams()

  useEffect(() => {
    // getUserdata()
  }, []);

  const getUserdata = async () => {};

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const addUser = async () => {};

  return (
    <div>
      <Form>
        <Typography varient="h4">Eite Product</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            name="username"
            onChange={(e) => onValueChange(e)}
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input
            name="description"
            onChange={(e) => onValueChange(e)}
            value={user.description}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Image Url</InputLabel>
          <Input
            name="image"
            onChange={(e) => onValueChange(e)}
            value={user.image}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Price</InputLabel>
          <Input
            name="price"
            onChange={(e) => onValueChange(e)}
            value={user.price}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Rating</InputLabel>
          <Input
            name="rating"
            onChange={(e) => onValueChange(e)}
            value={user.rating}
          />
        </FormControl>
        <FormControl>
          <Button
            onClick={() => addUser()}
            style={{ background: "#2874f0" }}
            variant="contained"
          >
            Edit Product
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};
export default EditProduct;
