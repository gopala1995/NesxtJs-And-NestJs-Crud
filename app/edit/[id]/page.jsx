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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditProduct = ({ params }) => {
  const { push } = useRouter();
  console.log("Paramsss",params)
  const initial = {
    name: "",
    description: "",
    published: Boolean,
    image: "",
    price: Number,
    rating: Number,
  };

  const [product, setProduct] = useState(initial);
  
  console.log("UUUTTTT", product);
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await axios.get(`http://localhost:3001/products/${params.id}`);
    console.log("Edittt", setProduct(res.data));
  };

  const editProduct = async () => {
    const res = await axios.put(
      `http://localhost:3001/products/${params.id}`,
      product
    );
    if(res){
      toast("Edit Successful",)
      setTimeout(() =>{
        push("/");
      },2000)
      
    }
  };

  return (
    <div>
      <Form>
        <ToastContainer/>
        <Typography varient="h4">Eite Product</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            name="name"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            value={product.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input
            name="description"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            value={product.description}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Image Url</InputLabel>
          <Input
            name="image"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            value={product.image}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Price</InputLabel>
          <Input
            name="price"
            onChange={(e) =>
              setProduct({
                ...product,
                [e.target.name]: parseInt(e.target.value),
              })
            }
            value={product.price}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Rating</InputLabel>
          <Input
            name="rating"
            onChange={(e) =>
              setProduct({
                ...product,
                [e.target.name]: parseFloat(e.target.value),
              })
            }
            value={product.rating}
          />
        </FormControl>
        <FormControl>
          <Button
            onClick={() => editProduct()}
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
