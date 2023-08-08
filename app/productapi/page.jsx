"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [Data, setData] = useState([]);
  console.log(Data);

  const ProductData = async () => {
   const res = await axios
      .get("http://localhost:3001/products")
      .then((responce) => setData(responce.data))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    ProductData();
  }, []);
  return (
    <>
      <div>Hellooooo</div>
    </>
  );
};

export default Product;
